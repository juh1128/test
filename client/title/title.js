/*
 * Created by JYH on 2015-05-07.
 */

var slideData;
var nowSelected;



function updateSplash(){

    var imageCnt = slideData.count();
    nowSelected++;
    if(nowSelected >= imageCnt){
        nowSelected = 0;
    }

    var nowSelectImage = noticeSlideImages.findOne( {order:nowSelected});
    var splashUrl;
    if( nowSelectImage ) {
        splashUrl = nowSelectImage.splash;
    }
    else{
        splashUrl = 'http://placehold.it/610x124/808000/&text=splash';
    }
    $('.splashImage').attr("src", splashUrl);

    setTimeout(updateSplash,2500);
}

function noticeInit(){
    $('#noticeBack').css( 'display','inline' );

    slideData = noticeSlideImages.find( {} );

    //스플래시 이미지 초기화
    nowSelected = -1;
    updateSplash();
}

Template.title.rendered = function(){
    if( displayNotice ){
        noticeInit();
    }
    resizingImg();
}
Template.title.destroyed = function(){

}




