$(document).ready(function(){
    $('.nav-items li').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    });
});