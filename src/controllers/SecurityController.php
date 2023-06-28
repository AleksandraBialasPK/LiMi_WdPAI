<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/User.php';
require_once __DIR__.'/../repository/UserRepository.php';

class SecurityController extends AppController {
    const MAX_FILE_SIZE = 5*1024*1024;
    const SUPPORTED_TYPES = ["image/png", "image/jpg"];
    const UPLOAD_DIRECTORY = "/../public/avatars/";

    private $userRepository;

    public function __construct(){
        parent::__construct();
        $this->userRepository = new UserRepository();
    }

    public function login() {
        session_start();
        if(!$this->isPost()) {
         return $this->render('login');
        }

        $email = $_POST["email"];
        $password = $_POST["password"];

        $userRepository = new UserRepository();
        $user = $userRepository->getUser($email);

        if (!$user) {
            $this->render("login", ["messages" => ["User does not exist!"]]);
        }

        if ($user->getEmail() !== $email)
        {
            return $this->render('login', ['messages' => ["User with this email does not exist!"]]);
        }

        if (!password_verify($password, $user->getPassword()))
        {
            return $this->render('login', ['messages' => ["Wrong password!"]]);
        }

        $userID = $user->getUserID();
        $roleID = $user->getRoleID();

        $_SESSION["user"] = htmlspecialchars($userID);
        $_SESSION["userRoleID"] = htmlspecialchars($roleID);

        $this->userRepository->addUserToSession($userID);
        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/day");
    }

    public function logout() {
        session_start();
        $userID = $_SESSION["user"];
        $this->userRepository->deleteUserFromSession($userID);
        unset($_SESSION["user"]);
        unset($_SESSION["userRoleID"]);
        session_destroy();
        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/login");
    }

    public function register()
    {
        if (!$this->isPost()) {
            $this->render('register');
        }
        if ($_POST["email"] === "") {
            return $this->render('register');
        }
        if ($this->isPost()) {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $roleID = 1;
            $confirmedPassword = $_POST['confirmedPassword'];
            $name = $_POST['name'];
            if (is_uploaded_file($_FILES["file"]["tmp_name"]) && $this->validate_file($_FILES["file"])) {
                move_uploaded_file(
                    $_FILES["file"]["tmp_name"],
                    dirname(__DIR__) . self::UPLOAD_DIRECTORY . $_FILES["file"]["name"]
                );
                $avatar = $_FILES["file"]["name"];
            } else {
                return $this->render('register', ['messages' => ["Provide an avatar!"]]);
            }

            if ($password !== $confirmedPassword) {
                $this->render('register', ['messages' => ['Please provide a proper password']]);
            }

            $password = password_hash($password, PASSWORD_DEFAULT);
            $user = new User(-1, $roleID, $email, $password, $name, $avatar);

            $this->userRepository->addUser($user);

            $this->render('login', ['messages' => ['You\'ve been successfully registered!']]);
        }
    }

    private function validate_file(array $file): bool {
        if($file["size"] > self::MAX_FILE_SIZE){
            $this->messages[] = "Provided file is too large :(";
            return false;
        }
        if(!isset($file["type"]) && !in_array($file["type"], self::SUPPORTED_TYPES)) {
            $this->messages[] = "Provided file type (".$file["type"].") is not supported :(";
            return false;
        }
        return true;
    }
}