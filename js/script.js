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


    $('.menu__anchor, .promo__link, .promo').click(function(){
        const menu = document.querySelector('.menu');
        menu.classList.remove('active');
        const anchor = $(this).attr("href");
        $("html, body").animate({scrollTop: $(anchor).offset().top + "px"});
        return false;
    });


    new WOW().init();
    
});

