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
        splashUrl = 'http://placehold.it/610x124/282828/&text=loading...';
    }
    $('.splashImage').attr("src", splashUrl);
    $('.splashImage').magnificPopup({
       items:{
           src: nowSelectImage.eventUrl
       },
        type: 'image',
        image:{
            varticalFit:true
        },
        closeOnBgClick:false,
        mainClass:'mfp-with-zoom mfp-img-mobile'
    });

    setTimeout(updateSplash,3000);
}

function noticeInit(){
    displayNotice = true;
    $('#noticeBack').css( 'display','inline' );

    slideData = noticeSlideImages.find( {}, {sort: {order:1}} );

    //이벤트 썸네일을 DB에서 불러와 업데이트
    slideData.forEach( function(doc){
       if(doc){
           var str = "<div id='"+ doc.name + "' class='item'>" +"<img class='slideImage lazyOwl' data-src=" + doc.thumbnail + ">" + "</div>";
           $('#carousel').append(str);
           $('#'+doc.name).magnificPopup({
              items:{
                  src: doc.eventUrl
              },
               type: 'image',
               image:{
                   varticalFit:true
               },
               closeOnBgClick:false,
               mainClass:'mfp-with-zoom mfp-img-mobile'
           });
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

    //종료 버튼
    $('#exitBtn').attr("onclick","$('#noticeBack').css( 'display','none' ); displayNotice=false;");
}

Template.title.rendered = function(){
    noticeInit();
    $('#titleBtn').bind('click',function(){
       if( !displayNotice ){
           Router.go('/login');
       }
    });
}
Template.title.destroyed = function(){

}




