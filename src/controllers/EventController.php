<?php

require_once 'AppController.php';
require_once __DIR__.'/../models/Event.php';
require_once __DIR__.'/../repository/EventRepository.php';
//require_once './src/controllers/SecurityController.php';

class EventController extends AppController{

    private $messages = [];
    private $eventRepository;
//    private $securityController;

    public function __construct(){
        parent::__construct();
        $this->eventRepository = new EventRepository();
//        $this->securityController = new SecurityController();
    }

    public function events() {
        session_start();
        if (empty($_SESSION["user"])) {
            $url = "http://$_SERVER[HTTP_HOST]";
            header("Location: {$url}/logout");
            return null;
        }
        $events = $this->eventRepository->getReviews();
        $this->render('day', ["day"=>$events]);
    }
    #TODO add event
    #TODO delete event as admin, adn delete own event as owner
}