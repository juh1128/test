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

    //슬라이드 사이즈 조절
/*    var resizeWidth = 610 * widthRate;
    var resizeHeight = 85 * heightRate;
    $('#notice#slide').css('width',resizeWidth,'height',resizeHeight);*/

    slideData = noticeSlideImages.find( {} );

    //SlideImage의 자식 요소로 thumbnail 나열
/*    slideData.forEach( function(doc){
        if(doc){
            $('.slideImage').
        }
    });*/


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




