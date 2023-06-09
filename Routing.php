<?php

require_once  'src/controllers/DefaultController.php';
require_once  'src/controllers/SecurityController.php';
require_once  'src/controllers/CalendarController.php';

class Routing {
    public static $routes;

    public static function get($url, $view) {
        self::$routes[$url] = $view;
    }

    public static function post($url, $view) {
        self::$routes[$url] = $view;
    }

    public static function run($url) {
        $action = explode("/", $url)[0];
        if(!array_key_exists($action, self::$routes)) {
            die("The URL is wrong!");
        }

        $controller_name = self::$routes[$action];
        $controller_obj = new $controller_name;
        $action = $action ?: 'index';
        $controller_obj->$action();
    }
}