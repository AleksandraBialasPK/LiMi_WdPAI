<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/User.php';
require_once __DIR__.'/../event/UserEvent.php';

class SecurityController extends AppController
{
    public function login()
    {
        $userEvent = new UserEvent();

        if($this->isPost()) {
         return $this->login('login');
        }

        $email = $_POST["email"];
        $password = $_POST["password"];

        $user = $userEvent->getUser();


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
//        return $this->render('day');
        $url = "http://$_SERVER[HTTP_HOST]";
        header("Location: {$url}/day");
    }
}