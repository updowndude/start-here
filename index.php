<!DOCTYPE html>
<html>
<head>
<title>Home</title>
<meta charset="UTF-8">
<!--what going to be on the page -->
<meta name="author" content="Correy Winke">
<!--<meta http-equiv="refresh" content="3">-->
 <meta name="language" content="english">
 <meta name="author" content="Correy Winke">
 <meta name="description" content="Help person find where to start with a topic">
 <meta name="abstract" content="Main page">
 <link href='http://fonts.googleapis.com/css?family=PT+Serif' rel='stylesheet' type='text/css'> <!-- header font -->
 <!-- favicon small incon in tab bar-->
 <!-- form http://www.favicon.cc/ -->
 <link rel="icon" type="image/x-icon" href="../images/icon.ico" />
 <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
 <link rel="stylesheet" href="https://code.getmdl.io/1.1.3/material.indigo-pink.min.css">
<link rel="stylesheet" href="bower_components/material-design-lite/material.min.css" />
<!-- why chrome  favicon don't show had to rename to icon-->
 <link rel="shortcut icon" type="image/x-icon" href="images/icon.ico" />
<link href='https://fonts.googleapis.com/css?family=Slabo+27px' rel='stylesheet' type='text/css'> <!--both head font -->
<link rel="stylesheet" type="text/css" href="dist/done/final.css">
<script src="dist/done/vendors.js" type="text/javascript"></script>
<script src="dist/done/built.js" type="text/javascript"></script>
</head>
<body>
<div id="container">

<!-- Parge headers-->
<div class="mdl-layout mdl-js-layout">
  <header class="mdl-layout__header">
    <div class="mdl-layout__header-row">
      <span class="mdl-layout-title">Pages</span>
      <div class="mdl-layout-spacer"></div>
      <nav class="mdl-navigation">
        <a href="index.php">Home &nbsp;</a>
        <a href="#">About &nbsp;</a>
        <a href="#">Form &nbsp;</a>
      </nav>
    </div>
  </header>
  <div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Tools</span>
    <nav class="mdl-navigation">
    <a href="php/programing.php" >Programing</a>
    <a href="php/reverse.php" >Reverse</a>
    <a href="php/game.php" >Game</a>
    </nav>
  </div>
  </div>
  <button id="home" class="mdl-button mdl-js-button mdl-button--fab mdl-button--colored">
    <i class="material-icons">home</i>
  </button>

<div class="pageContent" id="pageHome">
<div id="reactHomme"></div>

</div>
<aside id="socialMedia" class="asider">
  <!-- https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/2000px-F_icon.svg.png -->
  <a target="_blank" href="https://www.facebook.com/profile.php?id=100009007188851"><img src="images/fb.png" alt="Facebook" /></a>
  <!-- https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/200px-Linkedin_icon.svg.png -->
  <a target="_blank" href="https://www.linkedin.com/in/correy-winke-9b2734118?trk=nav_responsive_tab_profile_pic"><img src="images/lin.png" alt="Linkden" /></a>
</aside>

<footer>
<p>
  <!--corpyright notice and end of document -->
 Correy Winke, &copy;	 2016.
</p>
</footer>

</div>
<script src="dist/done/bundle.js" type="text/javascript" ></script>
</body>
</html>
