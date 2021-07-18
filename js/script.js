$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky")
        } else {
            $('.navbar').removeClass("sticky")
        }
        if (this.scroll > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // Slide-Up Script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    })

    // Typing Animation

    var typed = new Typed(".typing", {
        strings: ["Developer...", "Designer...", " Freelancer..."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });
    var typed = new Typed(".typing-2", {
        strings: ["Developer...", "Designer...", " Freelancer..."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true,
    });




    // toggle menubar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $(' .menu-btn i').toggleClass("active");

    })
})