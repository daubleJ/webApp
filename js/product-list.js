$(function () {
    var flag = 0;
    $('.recommend .list').hide().first().show();
    $('.nav .item').on('click',function () {
        $(this).addClass('cur').siblings().removeClass('cur');
        $('.recommend .list').eq($(this).index()).show().siblings().hide();
        flag = $(this).index();
    });
    $("body").on("touchstart", function(e) {
        e.preventDefault();
        startX = e.originalEvent.changedTouches[0].pageX;
        startY = e.originalEvent.changedTouches[0].pageY;
    });
    $("body").on("touchmove", function(e) {
        e.preventDefault();
        moveEndX = e.originalEvent.changedTouches[0].pageX,
            moveEndY = e.originalEvent.changedTouches[0].pageY,
            X = moveEndX - startX,
            Y = moveEndY - startY;
        if ( Y < -100 ) {
            var st = $(window).scrollTop();
            var s = $(document).outerHeight(true)-$(window).innerHeight();
            var str = '';
            if(st>=s){
                if(flag === 0){
                for(var i = 0; i < 5; i++){
                    str += '<li class="type01"><h5><a href="#">鲜花项目</a><i>优质中期</i></h5><a href="#" class="detail clear"><span class="left"><span class="rate">13.5%</span><br><i>约定年化利率</i></span><span class="right">期限<span class="time">365</span>天 余额&nbsp;&nbsp;<span class="balance">9.15</span>万可投 <br><span class="progress-bar"><i></i></span><span class="progress-value">40%</span></span></a></li>';
                }
                $('.pro-list').append(str);
            }else{
                    for(var i = 0; i < 5; i++){
                        str += '<li class="type01"><h5><a href="#">转债项目</a><i>优质中期</i></h5><a href="#" class="detail clear"><span class="left"><span class="rate">13.5%</span><br><i>约定年化利率</i></span><span class="right">期限<span class="time">365</span>天 余额&nbsp;&nbsp;<span class="balance">9.15</span>万可投 <br><span class="progress-bar"><i></i></span><span class="progress-value">40%</span></span></a></li>';
                    }
                    $('.cd-pro-list').append(str);
                }
            }
        }
    });
});