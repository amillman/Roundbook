$(window).load(function() {

    var sheet = '<link href="https://dl.dropboxusercontent.com/u/20880745/facebook-style.css" type="text/css" rel="stylesheet">';
    $("head").append(sheet);
    setTimeout(function() {$("body").css({opacity:1});},200);

});