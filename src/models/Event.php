<?php

#TODO return types of date and time in construct
class Event{

    private $title;
    private $category;
    private $date;
    private $startTime;
    private $endTime;

    public function __construct(string $title, string $category, $date, $startTime, $endTime)
    {
        $this->title = $title;
        $this->category = $category;
        $this->date = $date;
        $this->startTime = $startTime;
        $this->endTime = $endTime;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function setTitle(string $title)
    {
        $this->title = $title;
    }

    public function getCategory(): string
    {
        return $this->category;
    }

    public function setCategory(string $category)
    {
        $this->category = $category;
    }

    public function getDate():
    {
        return $this->date;
    }

    public function setDate($date)
    {
        $this->date = $date;
    }


    public function getStartTime()
    {
        return $this->startTime;
    }

    public function setStartTime($startTime)
    {
        $this->startTime = $startTime;
    }
    public function getEndTime()
    {
        return $this->endTime;
    }

    public function setEndTime($endTime)
    {
        $this->startTime = $endTime;
    }
}