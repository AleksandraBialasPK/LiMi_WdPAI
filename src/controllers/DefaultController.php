<?php

require_once 'AppController.php';

class DefaultController extends AppController {

    public function index() {
        $this->render('login');
    }

    public function day() {
        $this->render('day');
    }

    public function week() {
        $this->render('week');
    }
}