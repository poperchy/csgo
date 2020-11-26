
window.onload = function () {

    var burger = document.querySelector('.burger');
    var close = document.querySelector('.close');
    var navMenu = document.querySelector('.nav__mobile');
    var bodyL = document.querySelector('body');
    var mobLink = document.querySelectorAll('.mobile--link');
    mobLink.forEach(function(item) {
        item.addEventListener('click', function(){
            navMenu.classList.remove('nav__mobile--active')
            bodyL.style.overflow = "auto";
            bodyL.style.overflowX = "hidden";

        })
    });


    burger.addEventListener('click', function(){
        navMenu.classList.add('nav__mobile--active');
        bodyL.style.overflow = "hidden";
    });
    close.addEventListener('click', function(){
        navMenu.classList.remove('nav__mobile--active')
        bodyL.style.overflow = "auto";
        bodyL.style.overflowX = "hidden";
    });




    var cx, cy, mouseX, mouseY, posX, posY, clientX, clientY, dx, dy, tiltx, tilty, request, radius, degree

    const body = document.querySelector('body')

    cx = window.innerWidth / 2
    cy = window.innerHeight / 2

    body.addEventListener('mousemove', e => {

        clientX = e.pageX
        clientY = e.pageY

        request = requestAnimationFrame(updateMe)

    })

    function updateMe() {

        dx     = clientX - cx
        dy     = clientY - cy
        tiltx  = dy / cy
        tilty  = dx / cx
        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
        degree = radius * 2
        gsap.to('.ak', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
        gsap.to('.boom', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
        gsap.to('.glock', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
        gsap.to('.coins', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })
        gsap.to('.s', 1, { transform: `rotate3d( ${tiltx}, ${tilty}, 0, ${degree}deg )` })


    }


    var textarea = document.querySelector('.textarea__item');
    var textareaPlace = document.querySelector('.textarea__place');

    textarea.onblur = function() {
        textareaPlace.style.display = 'block';
    };

    textarea.onfocus = function() {
        textareaPlace.style.display = 'none';
    };

}();

$(document).ready(function () {

    var show = true;
    var countbox = ".indicator__wrap";
    var countbox2 = ".our__item";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        var e_height2 = $(countbox2).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height || e_height2 + e_top < w_height) {
            $('.dynamic-number').css('opacity', '1');
            $('.dynamic-number').spincrement({
                thousandSeparator: "",
                duration: 2500
            });

            show = false;
        }
    });

});
var swiper = new Swiper('.swiper-container', {
    spaceBetween: 50,
    centeredSlides: true,
    roundLengths: true,
    slidesPerView: 'auto',
    loopAdditionalSlides: 30,
    initialSlide: 1,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


});

$('a[href^="#"]').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    });
    return false;
});



$(function() {
    $('.gotop').click(function() {
        $("html, body").animate({
            scrollTop:0
        },1000);
    })
})