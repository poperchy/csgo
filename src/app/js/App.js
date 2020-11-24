window.onload = function () {

    let mySwiper = new Swiper('.brands__slider', {
        loop: true,
        // slidesPerView: 1,

        autoplay: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 4,
                spaceBetween: 40
            }
        },
        // slidesPerColumn: 2,
    })


    var swiper = new Swiper('.index-slider', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: true,
        speed: 5000,
    });

    const body = document.querySelector('body');
    const btnBurgerWrap = document.querySelector('.btn__burger');
    const spanBurger = document.querySelector('.btn__burger-burger');
    const menu = document.querySelector('.menu');
    const inputTypeSearch = document.querySelector('.input__search');
    const searchBtn = document.querySelector('.search__btn');
    const modalSent = document.getElementById(".sent__overlay");
    const spanClose = document.getElementsByClassName("sent__close")[0];
    const formBtn = document.getElementsByClassName("form__btn");
    const btnCallBack = document.querySelector(".callback");
    const modalCallBack = document.querySelector(".sent__overlay--form");




    $('.callback').click(function () {
        let modalCallBack = $('.sent__overlay--form');
        modalCallBack.css('display', 'flex');
        $('body').css('overflow', 'hidden');

        if (modalCallBack.css('display', 'flex')) {
            $('.sent__close').click(function () {
                $('.sent__overlay--form').css('display', 'none');
                $('body').css('overflow', 'auto');
            })
            $(window).click(function(){
                $('.sent__overlay--form').css('display','none');
                $('body').css('overflow', 'auto');
            })
        }
    });


    // $(window).click(function () {
    //     let callBack = $('.sent__overlay--form');
    //     callBack.css('display', 'flex');
    //
    //     if (callBack.css('display', 'flex')) {
    //         $('body').css('overflow', 'hidden');
    //     }
    // });


    inputTypeSearch.onfocus = function () {
        searchBtn.style.background = 'white';
    };

    inputTypeSearch.onblur = function () {
        searchBtn.style.background = 'transparent';
    };


    btnBurgerWrap.addEventListener('click', function (e) {
        e.preventDefault();

        if (spanBurger.classList.contains('btn__burger-burger--active')) {
            spanBurger.classList.remove('btn__burger-burger--active');
            menu.classList.remove('menu--active');
            body.style.overflow = '';
        } else {
            spanBurger.classList.add('btn__burger-burger--active');
            menu.classList.add('menu--active');
            body.style.overflow = 'hidden';
        }
    });

    $('.form__input-file').change(function () {
        if ($(this).val() != ''){
            $('.form__file-text').text('Выбрано файлов: ' + $(this)[0].files.length);
            $('.form__file-reset').css('display', 'block');
            $('.form__label-file').css('font-size', '16px');
        }
    });

    $('.form__file-reset').click(function (e) {
        e.preventDefault();
        $('.form__input-file').val('');
        $('.form__label-file').css('font-size', '0');
        $('.form__file-reset').css('display','none');
    });
    // $("#form").submit(function (e) {
    //     e.preventDefault();
    //
    //     const modalSent = document.getElementById(".sent__overlay");
    //     const spanClose = document.getElementsByClassName("sent__close")[0];
    //
    //     document.getElementById('name').value = "";
    //     document.getElementById('phone').value = "";
    //     document.getElementById('email').value = "";
    //     document.getElementById('textarea').value = "";
    //
    //     body.style.overflow = 'hidden';
    //     modalSent.style.display = 'flex';
    //     spanClose.onclick = function () {
    //         modalSent.style.display = "none";
    //
    //     };
    //     window.onclick = function (event) {
    //         if (event.target == modalSent) {
    //             modalSent.style.display = "none";
    //             // location.reload(true);
    //         }
    //     };
    // });

    $(function(){
        $(document).on("submit","#FormContact",function(e){
            e.preventDefault();
            var m_method=$(this).attr('method');
            var m_action=$(this).attr('action');
            var m_data=$(this).serialize();
            $.ajax({
                type: m_method,
                url: m_action,
                data: m_data,
                resetForm: 'true',
                success: function(result){
                    $('.sent__overlay').css('display','flex');
                    $('body').css('overflow', 'hidden');
                    $('.sent__close').click(function(){
                        $('.sent__overlay').css('display','none');
                        $('body').css('overflow', 'auto');
                    })
                    $(window).click(function(){
                        $('.sent__overlay').css('display','none');
                        $('body').css('overflow', 'auto');
                    })
                    $('#FormContact')[0].reset();
                    $("#first").val('');
                    //  var data = $(result).find("#modal-sent").html();
                    // $("#modal-sent").html(data);
                }
            });
        });
        $(document).ready(function(){
            $(".yak").on("click", function (event) {
                event.preventDefault();
                var id  = $(this).attr('href'),
                    top = $(id).offset().top;
                $('body,html').animate({scrollTop: top}, 1500);
            });
        });
        // $(document).on("submit","#formFooter",function(e){
        //     e.preventDefault();
        //     var m_method=$(this).attr('method');
        //     var m_action=$(this).attr('action');
        //     var m_data=$(this).serialize();
        //     $.ajax({
        //         type: m_method,
        //         url: m_action,
        //         data: m_data,
        //         resetForm: 'true',
        //         success: function(result){
        //             $('.sent__overlay').css('display','flex');
        //             $('body').css('overflow', 'hidden');
        //             $('.sent__close').click(function(){
        //                 $('.sent__overlay').css('display','none');
        //                 $('body').css('overflow', 'auto');
        //             })
        //             $('.form__label-file').remove();
        //             $('#FormContact')[0].reset();
        //             //  var data = $(result).find("#modal-sent").html();
        //             // $("#modal-sent").html(data);
        //         }
        //     });
        // });
        $(document).on("submit","#form_header",function(e){
            e.preventDefault();
            var m_method=$(this).attr('method');
            var m_action=$(this).attr('action');
            var m_data=$(this).serialize();
            $.ajax({
                type: m_method,
                url: m_action,
                data: m_data,
                resetForm: 'true',
                success: function(result){
                    $('.sent__overlay').css('display','flex');
                    $('body').css('overflow', 'hidden');
                    $('.sent__close').click(function(){
                        $('.sent__overlay').css('display','none');
                        $('body').css('overflow', 'auto');
                    })
                    $(window).click(function(){
                        $('.sent__overlay').css('display','none');
                        $('body').css('overflow', 'auto');
                    })
                    $('#FormContact')[0].reset();
                    //  var data = $(result).find("#modal-sent").html();
                    // $("#modal-sent").html(data);
                }
            });
        });

        $('.btn_header').click(function(){
            $('.sent__overlay--form').css('display','none');
            $('body').css('overflow', 'auto');
        })

    });

    $(document).ready(function () {
        $("#phone").mask("+375 (99) 999-99-99");
        $("#user-phone-modal").mask("+375 (99) 999-99-99");
        $('.article__desc-wrap').readmore({
            speed: 75,
        });

        if (window.matchMedia('(max-width: 768px)').matches) {
            $('.article__desc-wrap').readmore({
                maxHeight: 400,
                moreLink: '<a href="#">Показать больше</a>',
                lessLink: '<a href="#">Свернуть текст</a>',
            });
        } else {
            $('.article__desc-wrap').readmore({
                maxHeight: 700,
                moreLink: '<a href="#">Показать больше</a>',
                lessLink: '<a href="#">Свернуть текст</a>',
            });
        }
    });
}();


