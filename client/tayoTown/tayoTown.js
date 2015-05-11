/**
 * Created by JYH on 2015-05-10.
 */


var testInterval;


Template.tayoTown.rendered = function(){
    initCanvas();
}
Template.tayoTown.destroyed = function(){
    releaseCanvas();
}

function initCanvas(){
    var FPS = 30;
    canvas = $("#tayoCvs");
    resizeCanvas();
    ctx = canvas[0].getContext("2d");
    setInterval( framework, 1000/FPS );
    testInterval = Meteor.setInterval( function(){
        console.log("this is tayoTown!!");
    }, 1000);
}

function framework(){
    updateCanvas();
    renderCanvas();
}

function updateCanvas(){

}

function renderCanvas(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas[0].width, canvas[0].height);
}

function resizeCanvas(){
    canvas[0].width = $(window).innerWidth();
    canvas[0].height = $(window).innerHeight();
}

function releaseCanvas(){
    Meteor.clearInterval(testInterval);
}