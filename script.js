$(document).ready(function () {

    $(".toggle").on("click", function () {
        if ($(".item").hasClass("open")) {
            $(".item").removeClass("open");
            $(".menu-icon").removeClass("open")
        } else {
            $(".item").addClass("open");
            $(".menu-icon").addClass("open");

        }
    })
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("nav").addClass("blur");
        } else {
            $("nav").removeClass("blur");
        }
    });
    document.addEventListener("touchstart", function () {}, true);




});