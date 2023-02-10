// menu
$(document).ready(function() {
    
    $('#burger').click(function() {
        // відкрити/закрити меню
        $('#menu').toggleClass('active');
        // змінити бургер на Х і навпаки
        $('#burger').toggleClass('is-active');
        // зафіксувати body щоб не скролився коли визвано меню
        $('body').toggleClass('lock');
    })

    // якщо нажато пункт меню
    $('.menu__item').click(function() {
        // переходимо кудись або ще якийсь код
        // your code...
        // закрити відкрите меню
        $('#menu').toggleClass('active');
        // змінити Х на бургер
        $('#burger').toggleClass('is-active');
        // прибрати lock-клас у body
        $('body').toggleClass('lock');
    })
});

// scroll up
$(document).ready(function() {
    $('.top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > $(window).height()) {
            $('.top').addClass("active");
        } else {
            $('.top').removeClass("active");
        };
    });
});
