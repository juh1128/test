/*
 * Created by JYH on 2015-05-07.
 */

var slideData;
var nowSelected;
var slideJsonPath;
var owlCarousel;
var displayItemNum;
var firstUpdate;

function updateSplash(){

    var imageCnt = slideData.count();
    nowSelected++;

    if(nowSelected < imageCnt-(displayItemNum-1) && !firstUpdate){
        owlCarousel.next();
    }
    if(nowSelected >= imageCnt){
        nowSelected = 0;
        owlCarousel.goTo(0);
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

    setTimeout(updateSplash,3000);
}

function noticeInit(){
    $('#noticeBack').css( 'display','inline' );

    //슬라이드 사이즈 조절
/*    var resizeWidth = 610 * widthRate;
    var resizeHeight = 85 * heightRate;
    $('#notice#slide').css('width',resizeWidth,'height',resizeHeight);*/

    slideData = noticeSlideImages.find( {}, {sort: {order:1}} );

    //이벤트 썸네일을 DB에서 불러와 업데이트
    slideData.forEach( function(doc){
       if(doc){
           var str = "<div class='item'>" + "<img class='slideImage lazyOwl' data-src=" + doc.thumbnail + ">" + "</div>";
           $('#carousel').append(str);
       }
    });

    displayItemNum = 3;
    $('#carousel').owlCarousel({
        items:displayItemNum,
        itemsTablet:[768,displayItemNum],
        itemsMobile:[479,displayItemNum],
        autoHeight:true,
        pagination:false,
        lazyLoad:true
    });
    owlCarousel = $('#carousel').data('owlCarousel');

    //스플래시 이미지 초기화
    firstUpdate = true;
    nowSelected = -1;
    updateSplash();
    firstUpdate = false;
}

Template.title.rendered = function(){
    if( displayNotice ){
        noticeInit();
    }
}
Template.title.destroyed = function(){

}




