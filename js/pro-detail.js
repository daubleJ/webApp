$(function () {
    $('.tabs .nav li').click(function () {
       var ind =  $(this).index();
       $(this).addClass('cur').siblings().removeClass('cur');
       $('.tabs .content .item').eq(ind).show().siblings().hide();
        $('.tabs .content').css('height',$('.tabs .content .item').eq(ind).outerHeight());
    })
});