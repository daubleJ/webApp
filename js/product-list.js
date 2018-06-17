$(function () {
    $('.recommend .wrap').css('height',$('.recommend .wrap ul').height());
    $('.recommend .list').hide().first().show();
    $('.nav .item').on('click',function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.recommend .list').eq($(this).index()).show().siblings().hide();
    });
});