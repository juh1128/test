/*
 * Created by JYH on 2015-05-07.
 */

var canvas;
var ctx;
var pororoButton = new Image();
var tayoButton = new Image();

window.addEventListener("resize",resizeCanvas, false);

function clicked(e){

    e.preventDefault();
    var x = e.clientX;

    if( x < canvas[0].width*0.5){
        Router.go('/pororoTown');
    }
    else{
        Router.go('/tayoTown');
    }
}

function renderCanvas(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas[0].width, canvas[0].height);

    ctx.drawImage(pororoButton, 0, 0, canvas[0].width * 0.5, canvas[0].height);
    ctx.drawImage(tayoButton, canvas[0].width * 0.5, 0, canvas[0].width * 0.5, canvas[0].height);
}

function resizeCanvas(){
    canvas[0].width = $(window).innerWidth();
    canvas[0].height = $(window).innerHeight();
}

function initCanvas(){
    var FPS = 30;
    canvas = $("#titleCvs");
    resizeCanvas();
    ctx = canvas[0].getContext("2d");

    pororoButton.src = "/resources/pororoTown/PororoTown_Button.png";
    tayoButton.src ="/resources/tayoTown/TayoTown_Button.png";

    canvas[0].addEventListener("mouseup", clicked, false);
    setInterval( renderCanvas, 1000/FPS );
}

Template.title.rendered = function(){
    initCanvas();
}