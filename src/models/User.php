<?php

class User
{
//    private $userID;
    private $roleID;
    private $email;
    private $password;
    private $salt;
    private $name;
    private $avatar;

    public function __construct(int $roleID, string $email, string $password, string $salt, string $name, string $avatar) {
//        $this->userID = $userID;
        $this->roleID = $roleID;
        $this->email = $email;
        $this->password = $password;
        $this->salt = $salt;
        $this->name = $name;
        $this->avatar = $avatar;
    }

//    public function getUserID(): int {
//        return $this->userID;
//    }
//
//    public function setUserID(int $userID) {
//        $this->userID = $userID;
//    }

    public function getRoleID(): int {
        return $this->roleID;
    }

    public function setRoleID($roleID) {
        $this->roleID = $roleID;
    }

    public function getEmail(): string {
        return $this->email;
    }

    public function setEmail(string $email) {
        $this->email = $email;
    }

    public function getPassword(): string {
        return $this->password;
    }

    public function setPassword(string $password) {
        $this->password = $password;
    }

    public function getSalt() {
        return $this->salt;
    }

    public function setSalt() {
        $this->salt = "foo";
    }

    public function getName(): string {
        return $this->name;
    }

    public function setName(string $name) {
        $this->name = $name;
    }

    public function getAvatar() {
        return $this->avatar;
    }

    public function setAvatar($avatar) {
        $this->avatar = $avatar;
    }
}