$('.btn-group .hold').click(function () {
    $('.list-hold').show().next().hide();
});
$('.btn-group .finish').click(function () {
    $('.list-finish').show().prev().hide();
});