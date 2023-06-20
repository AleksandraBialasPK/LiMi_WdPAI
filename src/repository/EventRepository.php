<?php

require_once "Repository.php";
require_once __DIR__."/../models/Event.php";

class EventRepository extends Repository{
    public function getEvent(int $id){
        $raw_statement = "SELECT * FROM \"Events\" WHERE \"eventID\" = :id";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->bindParam(":id", $id, PDO::PARAM_INT);
        $statement->execute();

        $event = $statement->fetch(PDO::FETCH_ASSOC);

        if ($event === false){
            return null;
        }

        return new Event (
            $event["title"],
            $event["category"],
            $event["date"],
            $event["startTime"],
            $event["endTime"]
        );
    }

    public function addEvent(Event $event): void {
        $statement = $this->database->connect()->prepare('
            INSERT INTO \"Events\" (title, category, date, "startTime", "endTime") VALUES (?, ?, ?, ?, ?)
        ');

        $statement->execute([
            $event->getTitle(),
            $event->getCategory(),
            $event->getDate(),
            $event->getStartTime(),
            $event->getEndTime()
            ]);
    }
}