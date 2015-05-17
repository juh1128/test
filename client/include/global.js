/**
 * Created by JYH on 2015-05-16.
 */

widthRate =  screen.width / 640;
heightRate =  screen.height / 360;

displayNotice = true;

updateRate = function(){
    widthRate =  screen.width / 640;
    heightRate =  screen.height / 360;
}

resizingImg = function(){
    updateRate();
    $('img').each( function(){
        var oldWitdh = $(this).width();
        var oldHeight = $(this).height();
        var resizeWidth = oldWitdh * widthRate;
        var resizeHeight = oldHeight * heightRate;
        $(this).attr({width: resizeWidth, height: resizeHeight});
    });
}