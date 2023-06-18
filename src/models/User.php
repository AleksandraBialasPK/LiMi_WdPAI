<?php

class User
{
    private $userID;
    private $roleID;
    private $email;
    private $password;

    private $name;
    private $avatar;

    public function __construct(int $userID, int $roleID, string $email, string $password, string $name, string $avatar) {
        $this->userID = $userID;
        $this->roleID = $roleID;
        $this->email = $email;
        $this->password = $password;
        $this->name = $name;
        $this->avatar = $avatar;
    }

    public function getUserID(): int {
        return $this->userID;
    }

    public function setUserID(int $userID) {
        $this->userID = $userID;
    }

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

    public function getName(): string {
        return $this->name;
    }

    public function setName(string $name) {
        $this->name = $name;
    }

    public function getAvatar(): string {
        return $this->avatar;
    }

    public function setAvatar($avatar) {
        $this->avatar = $avatar;
    }
}