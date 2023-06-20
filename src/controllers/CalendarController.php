<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/User.php';
require_once __DIR__.'/../repository/UserRepository.php';

class CalendarController extends AppController {

    private $userRepository;

    public function __construct(){
        parent::__construct();
        $this->userRepository = new UserRepository();
    }

    public function day() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        $users = $this->userRepository->getUsers();
        $this->render("day", ["users" => $users]);
    }

    public function week() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        $users = $this->userRepository->getUsers();
        $this->render("week", ["users" => $users]);
    }
}