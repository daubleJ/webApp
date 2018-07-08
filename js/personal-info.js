$('.block02 .txt').click(function () {
    if($(this).html()==='立即开户'){
        $('.hide02').toggle();
    }else{
        $('.hide01').toggle();
    }
});