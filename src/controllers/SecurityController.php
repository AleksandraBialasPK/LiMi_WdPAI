<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/User.php';

class SecurityController extends AppController
{
    public function login()
    {
        $user = new User("dipper@gmail.com", "mysteryShack", "Dipper", "Pines");

        $email = $_POST["email"];
        $password = $_POST["password"];

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