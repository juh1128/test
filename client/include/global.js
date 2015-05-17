/**
 * Created by JYH on 2015-05-16.
 */

widthRate =  $(window).width() / 640;
heightRate =  $(window).height() / 360;

displayNotice = true;

updateRate = function(){
    widthRate =  $(window).width() / 640;
    heightRate =  $(window).height() / 360;
}

resizingImg = function(){
    updateRate();
    if( widthRate != 0 && heightRate != 0) {
        $('img').each(function () {
            var oldWitdh = $(this).width();
            var oldHeight = $(this).height();
            var resizeWidth = oldWitdh * widthRate;
            var resizeHeight = oldHeight * heightRate;
            $(this).attr({width: resizeWidth, height: resizeHeight});
        });
    }
}