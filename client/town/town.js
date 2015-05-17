/**
 * Created by JYH on 2015-05-10.
 */


Template.pororoTown.rendered = function(){
    //swipe
    $(document).on( "swipeleft", function(e) {
        console.log("left");
        navnext( "tayoTown" );
    });
    $(document).on( "swiperight", function(e) {
        console.log("right");
        navprev( "tayoTown" );
    });
}
Template.pororoTown.destroyed = function(){
    $( document ).off("swipeleft");
    $( document ).off("swiperight");
    console.log("release canvas");
}

/*
var testInterval;
var canvas, ctx;

Template.pororoTown.rendered = function(){
    initCanvas();
}
Template.pororoTown.destroyed = function(){
    releaseCanvas();
}

function initCanvas(){
    var FPS = 30;
    canvas = $("#pororoCvs");
    resizeCanvas();
    ctx = canvas[0].getContext("2d");
    setInterval( framework, 1000/FPS );
    testInterval = Meteor.setInterval( function(){
        console.log("this is pororo Town!!");
    }, 1000);

    //swipe
    canvas.on( "swipeleft", function(e) {
        console.log("left");
        navnext( "tayoTown" );
    });
    canvas.on( "swiperight", function(e) {
        console.log("right");
        navprev( "tayoTown" );
    });
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

    //테스트 글자
    ctx.fillStyle = "#ffffff";
    ctx.font = '25px Arial';
    ctx.textBaseline = "top";
    ctx.fillText("뽀로로 데이터: " + PororoData.find().count(),5,5);

    //테스트 버튼
}

function resizeCanvas(){
    canvas[0].width = $(window).innerWidth();
    canvas[0].height = $(window).innerHeight();
}

function releaseCanvas(){
    Meteor.clearInterval(testInterval);
    $( document ).off("swipeleft");
    $( document ).off("swiperight");
    console.log("release canvas");
}*/



/*
// Navigate to the next page on swipeleft
$( document ).on( "swipeleft", ".ui-page", function( event ) {
    // Get the filename of the next page. We stored that in the data-next
    // attribute in the original markup.
    var next = $( this ).jqmData( "next" );
    // Check if there is a next page and
    // swipes may also happen when the user highlights text, so ignore those.
    // We're only interested in swipes on the page.
    if ( next && ( event.target === $( this )[ 0 ] ) ) {
        navnext( next );
    }
});
// Navigate to the next page when the "next" button in the footer is clicked
$( document ).on( "click", ".next", function() {
    var next = $( ".ui-page-active" ).jqmData( "next" );
    // Check if there is a next page
    if ( next ) {
        navnext( next );
    }
});
// The same for the navigating to the previous page
$( document ).on( "swiperight", ".ui-page", function( event ) {
    var prev = $( this ).jqmData( "prev" );
    if ( prev && ( event.target === $( this )[ 0 ] ) ) {
        navprev( prev );
    }
});
$( document ).on( "click", ".prev", function() {
    var prev = $( ".ui-page-active" ).jqmData( "prev" );
    if ( prev ) {
        navprev( prev );
    }
});*/
