<?php

class AppController {

    private  $request;

    public function __construct()
    {
        $this->request = $_SERVER['REQUEST_METHOD'];
    }

    protected function isPost(): bool
    {
        return $this->request === $_POST;
    }

    protected function isGet(): bool
    {
        return $this->request === $_GET;
    }

    protected function render(string $template = null, array $variables = []) {
        $template_path = 'public/views/'.$template.'.php';
        $output = "File not found :(";

        if (file_exists($template_path)) {
            extract($variables);

            ob_start();
            include $template_path;
            $output = ob_get_clean();
        }
        print $output;
    }
}