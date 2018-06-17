$('.nav-bar .btn').click(function () {
    var count = parseInt($('.model .count').html());        $('.model').show();
    var timer = setInterval(function () {
        count--;
        if(count===0){
            clearInterval(timer);
            $('.model').hide();
        }
        $('.model .count').html(count);
    },1000);

});