<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/User.php';
require_once __DIR__ . '/../repository/UserRepository.php';

class SecurityController extends AppController {
    const MAX_FILE_SIZE = 5*1024*1024;
    const SUPPORTED_TYPES = ["image/png", "image/jpg"];
    const UPLOAD_DIRECTORY = "/../public/uploads/avatars/";

    private $userEvent;

    public function __construct(){
        parent::__construct();
        $this->userEvent = new UserRepository();
    }

    public function login() {
        session_start();
        if($this->isPost()) {
         return $this->login('login');
        }

        $email = $_POST["email"];
        $password = $_POST["password"];

        $userEvent = new UserRepository();
        $user = $userEvent->getUser($email);


        if (!$user) {
            $this->render("login", ["messages" => ["User does not exist!"]]);
        }

        if ($user->getEmail() !== $email)
        {
            return $this->render('login', ['messages' => ["User with this email does not exist!"]]);
        }

        if ($user->getPassword() !== $password)
        {
            return $this->render('login', ['messages' => ["Wrong password!"]]);
        }

        $userID = $user->getUserID();
        $_SESSION["user"] = htmlspecialchars($userID);

        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/day");
    }

    public function logout() {
        session_start();
        unset($_SESSION["user"]);
        session_destroy();
        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/login");
    }
}