$(document).ready(function () {
    $(".onas2").click(function () {
        $('html, body').animate({
            scrollTop: $(".onas").offset().top
        }, 500);
    });
    $(".dostavka2").click(function () {
        $('html, body').animate({
            scrollTop: $(".dostavka").offset().top
        }, 500);
    });

    $(".omebeli2").click(function () {
        $('html, body').animate({
            scrollTop: $(".omebeli").offset().top
        }, 500);
    });
    $(".kontakti2").click(function () {
        $('html, body').animate({
            scrollTop: $(".kontakti").offset().top
        }, 500);
    });

});
