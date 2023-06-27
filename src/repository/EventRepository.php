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

    public function getEventsForDay(string $day) {
        $raw_statement = "SELECT \"Events\".\"eventID\", \"Events\".title, \"Events\".category, \"Events\".date, 
                            \"Events\".\"startTime\", \"Events\".\"endTime\", \"UserDetails\".avatar 
                            FROM \"UserToEvent\"
                            INNER JOIN \"Events\"
                                ON \"UserToEvent\".\"eventID\" = \"Events\".\"eventID\"
                            INNER JOIN \"Users\"
                                ON \"UserToEvent\".\"userID\" = \"Users\".\"userID\"
                            INNER JOIN \"UserDetails\"
                                ON \"Users\".\"userDetailsID\" = \"UserDetails\".\"userDetailsID\"
                            WHERE \"Events\".date = :day";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->bindParam(":day", $day, PDO::PARAM_STR);
        $statement->execute();

        return $statement->fetchAll(PDO::FETCH_ASSOC);

    }

    public function getEvents(): array {
        $result = [];
        $raw_statement = "SELECT * FROM \"Events\"";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->execute();
        $events = $statement->fetchAll(PDO::FETCH_ASSOC);
        foreach ($events as $event) {
            $result[] = new Event(
                $event["title"],
                $event["category"],
                $event["date"],
                $event["startTime"],
                $event["endTime"]
            );
        }
        return $result;
    }

    public function addEvent(Event $event, string $userID): void {
        $statement = $this->database->connect()->prepare(
            "INSERT INTO \"Events\" (title, category, date, \"startTime\", \"endTime\") VALUES (?, ?, ?, ?, ?) RETURNING \"eventID\""
        );

        $statement->execute([
            $event->getTitle(),
            $event->getCategory(),
            $event->getDate(),
            $event->getStartTime(),
            $event->getEndTime()
            ]);
        $eventID = $statement->fetch(PDO::FETCH_ASSOC)["eventID"];

        $raw_statement = "INSERT INTO \"UserToEvent\" (\"userID\", \"eventID\") VALUES (?, ?)";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->execute([$userID, $eventID]);
    }
}

