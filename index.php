<?php

require 'Routing.php';

$path = trim($_SERVER['REQUEST_URI'], '/');
$path = parse_url($path, PHP_URL_PATH);

Routing::get('', 'DefaultController');
Routing::get('index', 'DefaultController');
Routing::get('day', 'CalendarController');
Routing::get('week', 'CalendarController');

Routing::post('login', 'SecurityController');
Routing::post('logout', 'SecurityController');
Routing::post('register', 'SecurityController');
Routing::post('addEvent', 'CalendarController');
Routing::post('getEventsForDay', 'CalendarController');

Routing::run($path);