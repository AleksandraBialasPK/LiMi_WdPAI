<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="public/css/login_logout.css">
    <script src="https://kit.fontawesome.com/79d7c5829a.js" crossorigin="anonymous"></script>
    <title>Welcome to LiMi!</title>
</head>
<body>
<div class="login-left-side">
    <img class="logo" src="public/img/logo-no-background.svg" alt="LiMi logo">
    <form class="login-form-container" action="register" method="POST" ENCTYPE="multipart/form-data">
        <input class="login-input input-container" name="email" type="text" placeholder="email@email.com">
        <input class="login-input input-container" name="password" type="password" placeholder="password">
        <input class="login-input input-container" name="confirmedPassword" type="password" placeholder="confirm password">
        <input class="login-input input-container" name="name" type="text" placeholder="name">
        <label class="login-input input-container">
            <i class="fa fa-file-arrow-up active"></i>
            <input type="file" name="file">
        </label>
        <div class="messages">
            <?php
            if(isset($messages)) {
                foreach ($messages as $message) {
                    echo $message;
                }
            }
            ?>
        </div>
        <div class="login-button-container">
            <button type="submit">Sign Up</button>
            <button id="sign-up-button" type="submit" formaction="/login">Sign In</button>
        </div>
    </form>
</div>
<div class="login-right-side">
    <img id="dogs-image" src="public/img/BeFunky-collage.jpg" alt="Happy Shih Tzu (dog)">
</div>
</body>