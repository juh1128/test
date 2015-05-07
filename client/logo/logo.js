

Template.logo.helpers( {

    logoUpdate: function(){
        //jQuery
        $(document).ready(function(){

            //2초 뒤 로고 바꾸기
            setTimeout( function(){
                $('#logoImage').attr("src", "/resources/logo/WeCreative_Logo.png");
                //로고 바뀌고 2.5초 뒤 타이틀 화면으로 이동
                setTimeout( gotoTitle, 2500);
            }, 2000);
        });
    }

});

function gotoTitle(){
    Router.go('/title');
}