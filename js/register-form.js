

$(function () {
    $("body").css({opacity: .8});   //设置透明度
    $.backstretch([
        "../img/backstretch/1.jpg",
        "../img/backstretch/2.jpg",
        "../img/backstretch/3.jpg",
    ], {duration: 3000, fade: 750});
});