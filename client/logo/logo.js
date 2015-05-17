

Template.logo.rendered = function(){
    //2초 뒤 로고 바꾸기
    setTimeout( function(){
        $('#logoImage').attr("src", "http://placehold.it/640x360/FFDC3C/&text=WeCreative");
        setTimeout( gotoTitle, 2500);
    }, 2000);
}

function gotoTitle(){
    Router.go('/title');
}