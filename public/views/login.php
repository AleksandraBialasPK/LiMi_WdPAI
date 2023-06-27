<!DOCTYPE html>
<head>
    <link rel="stylesheet" type="text/css" href="public/css/login_logout.css">
    <script src="https://kit.fontawesome.com/79d7c5829a.js" crossorigin="anonymous"></script>
    <title>Welcome to LiMi!</title>
</head>
<body>
    <div class="login-left-side">
        <img class="logo" src="public/img/logo-no-background.svg" alt="LiMi logo">
        <form method="POST" action="login">
            <div class="messages">
                <?php if(isset($messages))
                {
                    foreach($messages as $message){
                        echo $message;
                    }
                }
                ?>
            </div>
            <div class="login-form-container">
                <div class="input-container">
                    <i class="fa-solid fa-user"></i>
                    <input class="login-input" name="email" type="text" placeholder="email@email.com">
                </div>
                <div class="input-container">
                    <i class="fa-solid fa-key"></i>
                    <input class="login-input" name="password" type="password" placeholder="password">
                </div>
            </div>
            <div class="login-button-container">
                <button type="submit">Sign In</button>
                <button id="sign-up-button" type="submit" formaction="/register">Sign up</button>
            </div>
        </form>
    </div>
    <div class="login-right-side">
        <img id="dogs-image" src="public/img/BeFunky-collage.jpg" alt="Happy Shih Tzu (dog)">
    </div>
</body>