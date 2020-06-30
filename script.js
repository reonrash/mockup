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
    document.addEventListener("touchstart", function () {}, true);




});