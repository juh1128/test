/**
 * Created by JYH on 2015-05-16.
 */

widthRate =  $(window).width() / 640;
heightRate =  $(window).height() / 360;

displayNotice = true;

updateRate = function(){
/*    widthRate =  $(window).width() / 640;
    heightRate =  $(window).height() / 360;
    console.log("updateRate",widthRate,heightRate);*/
}

resizingImg = function(){
/*    updateRate();
    $('img').each(function () {
        var resizeWidth = $(this).width() * widthRate;
        var resizeHeight = $(this).height() * heightRate;
        if( resizeWidth != 0 && resizeHeight != 0) {
            console.log($(this), $(this).width(), $(this).height());
            $(this).css('width',resizeWidth,'height',resizeHeight);
            $(this).attr({width: resizeWidth, height: resizeHeight});
        }
    });
    $('div').each( function(){
        var reposLeft = $(this).css('left').replace(/[^-\d\.]/g,'') * widthRate;
        var reposTop = $(this).css('top').replace(/[^-\d\.]/g,'') * heightRate;
        var resizeWidth = $(this).width() * widthRate;
        var resizeHeight = $(this).height() * heightRate;
        if( resizeWidth != 0 && resizeHeight != 0) {
            console.log($(this), $(this).width(), $(this).height());
            //$(this).css('left',reposLeft, 'top', reposTop);
            $(this).css('width',resizeWidth,'height',resizeHeight);
        }
    });*/
}