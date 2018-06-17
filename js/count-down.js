$('.nav-bar .btn').click(function () {
    var count = parseInt($('.model .count i').html());        $('.model').show();
    var timer = setInterval(function () {
        count--;
        if(count===0){
            clearInterval(timer);
            $('.model').hide();
        }
        $('.model .count i').html(count);
    },1000);

});