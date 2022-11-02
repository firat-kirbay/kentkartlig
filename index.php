<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - 3D Football Lineup</title>
  <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'><link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<main>
    <div class="static">
        <h1 class="js-heading">KENTKART LİG</h1>
        <p class="js-subheading">03.11.2022 Perşembe 23:00 - 24:00</p>
        <div class="js-switcher switcher">
            <a href="#" class="js-switch disabled switch-btn">HOME</a><a href="#" class="js-switch switch-btn">AWAY</a>
        </div>
    </div>
    <div class="js-stage stage texture">
        <div class="js-world world">
            <div class="team js-team">
                <!-- Team cards / icons goes here -->
            </div>
            <div class="terrain js-terrain">
                <div class="field field--alt"></div>
                <div class="field ground">
                    <div class="field__texture field__texture--gradient"></div>
                    <div class="field__texture field__texture--gradient-b"></div>
                    <div class="field__texture field__texture--grass"></div>
                    <div class="field__line field__line--goal"></div>
                    <div class="field__line field__line--goal field__line--goal--far"></div>
                    <div class="field__line field__line--outline"></div>
                    <div class="field__line field__line--penalty"></div>
                    <div class="field__line field__line--penalty-arc"></div>
                    <div class="field__line field__line--penalty-arc field__line--penalty-arc--far"></div>
                    <div class="field__line field__line--mid"></div>
                    <div class="field__line field__line--circle"></div>
                    <div class="field__line field__line--penalty field__line--penalty--far"></div>
                </div>
                <div class="field__side field__side--front"></div>
                <div class="field__side field__side--left"></div>
                <div class="field__side field__side--right"></div>
                <div class="field__side field__side--back"></div>
            </div>
        </div>
        <div class="loading js-loading">PLEASE WAIT...</div>
    </div>
    </main>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js'></script><script  src="./script.js"></script>

</body>
</html>
