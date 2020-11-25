window.onload = function () {
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
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.dynamic-number').css('opacity', '1');
            $('.dynamic-number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});