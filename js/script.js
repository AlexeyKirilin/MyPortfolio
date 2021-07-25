const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu');
    close = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
    lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;


    $(window).scroll(function() {
        if ($(this).scrollTop() > 1400) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });


    $('.menu__anchor').click(function(){
        const menu = document.querySelector('.menu');
        menu.classList.remove('active');
        const anchor = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
        return false;
    });


    new WOW().init();
    
});




//scroll and pageup
// $(window).scroll(function () {
//     if ($(this).scrollTop() > 1600) {
//         $('.pageup').fadeIn();
//     } else {
//         $('.pageup').fadeOut();
//     };
    
// });
