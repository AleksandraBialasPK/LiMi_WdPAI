<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/User.php';
require_once __DIR__.'/../models/Event.php';
require_once __DIR__.'/../repository/UserRepository.php';
require_once __DIR__.'/../repository/EventRepository.php';

class CalendarController extends AppController {

    private $userRepository;
    private $eventRepository;

    public function __construct(){
        parent::__construct();
        $this->userRepository = new UserRepository();
        $this->eventRepository = new EventRepository();
    }

    public function day() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }

        $users = $this->userRepository->getUsers();

        foreach ($users as $user) {
            if(strval($user->getUserID()) === $_SESSION["user"]){
                $loggedInUsername = $user->getName();
                $loggedInAvatar = $user->getAvatar();
            }
        }

        $this->render("day", ["users" => $users, 'loggedInUsername'=>$loggedInUsername, 'loggedInAvatar'=>$loggedInAvatar]);
    }

    public function getEventsForDay() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        $contentType = isset($_SERVER["CONTENT_TYPE"]) ? trim($_SERVER["CONTENT_TYPE"]) : "";
        if($contentType === "application/json") {
            $content = trim(file_get_contents("php://input"));
            $decoded_content = json_decode($content, true);

            header("Content-type: application/json");
            http_response_code(200);
            echo json_encode($this->eventRepository->getEventsForDay($decoded_content["day"]));
        }
    }

    public function week() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        $users = $this->userRepository->getUsers();

        foreach ($users as $user) {
            if(strval($user->getUserID()) === $_SESSION["user"]){
                $loggedInUsername = $user->getName();
                $loggedInAvatar = $user->getAvatar();
            }
        }

        $this->render("week", ["users" => $users, 'loggedInUsername'=>$loggedInUsername, 'loggedInAvatar'=>$loggedInAvatar]);
    }

    public function getEvents() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        $events = $this->eventRepository->getEvents();
        $this->render('day', ["day"=>$events]);
    }

    public function addEvent() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        if ($this->isPost()) {
            $title = $_POST['title'];
            $category = $_POST['category'];
            $date = $_POST['date'];
            $startTime = $_POST['startTime'];
            $endTime = $_POST['endTime'];

            $event = new Event($title, $category, $date, $startTime, $endTime);

            $this->eventRepository->addEvent($event, $_SESSION["user"]);

            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/day");
        }
    }
}