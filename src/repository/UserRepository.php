<?php

require_once 'Repository.php';
require_once __DIR__."/../models/User.php";

class UserRepository extends Repository {
    public function getUser(string $email){
        $raw_statement = "SELECT * FROM \"Users\" join \"UserDetails\" on \"Users\".\"userDetailsID\" = \"UserDetails\".\"userDetailsID\" WHERE email=:email";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->bindParam(":email", $email, PDO::PARAM_STR);
        $statement->execute();

        $user_data = $statement->fetch(PDO::FETCH_ASSOC);

        if ($user_data === false) {
            return null;
        }

        return new User(
            $user_data["roleID"],
            $user_data["userID"],
            $user_data["email"],
            $user_data["password"],
            $user_data["name"],
            $user_data["avatar"]
        );
    }

    public function getUsers(): array{
        $result = [];
        $raw_statement = "SELECT * FROM \"Users\" join \"UsersDetails\" on \"Users\".\"userDetailsID\" = \"UsersDetails\".\"userDetailsID\" ORDER BY \"userID\" DESC";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->execute();
        $users = $statement->fetchAll(PDO::FETCH_ASSOC);
        foreach ($users as $user_data) {
            $result[] = new User(
                $user_data["userID"],
                $user_data["roleID"],
                $user_data["email"],
                $user_data["password"],
                $user_data["name"],
                $user_data["avatar"]
            );
        }
        return $result;
    }

    public function addUser(User $user){
        $raw_statement = "INSERT INTO \"UsersDetails\" (name, avatar) VALUES (?, ?) RETURNING \"userDetailsID\"";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->execute([
            $user->getName(),
            $user->getAvatar()
        ]);
        $userDetailsID = $statement->fetch(PDO::FETCH_ASSOC)["id"];

        $raw_statement = "INSERT into \"Users\" (email, password, \"roleID\", \"userDetailsID\") values (?, ?, ?, ?)";
        $statement = $this->database->connect()->prepare($raw_statement);
        $statement->execute([
            $user->getEmail(),
            $user->getPassword(),
            $user->getRoleID(),
            $userDetailsID
        ]);

    }
}