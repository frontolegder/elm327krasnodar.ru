$(document).ready(function(){
   /*  $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.png"></button>',
        nextArrow: `<button type="button" class="slick-next"><img src="icons/right.png"></button>`,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false}
            }
        ]
    });
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass
          ('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    $('.catalog-item__link').each(function(i) {
        $(this).on(`click`, function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    })
    $('.catalog-item__back').each(function(i) {
        $(this).on(`click`, function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    }) */

   

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu_item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    }) 
    //modal

    $(`[data-modal=about15]`).on(`click`, function() { /* появление модального окна о 1.5 */
        $(`.overlay, #about15`).fadeIn(`slow`)
    });
    $(`[data-modal=about21]`).on(`click`, function() { /* появление модального окна о 2.1 */
        $(`.overlay, #about21`).fadeIn(`slow`)
    });
    $(`[data-modal=order]`).on(`click`, function() { /* модальное окно заказа */
        $(`.overlay, #order`).fadeIn(`slow`)
    });
    /* работа крестика красного */
    $(`.modal__close`).on(`click`, function() {
        $(`.overlay,#about15, #about21, #thanks, #order`).fadeOut(`slow`)
    });
   

    $(`.orderbtn`).each(function(i) {  /* поодстановка товара в форму */
        $(this).on(`click`, function() {
            $(`#order .modal__descr`).text($(`.catalog-item__subtitle`).eq(i).text());
            $(`.overlay, #order`).fadeIn(`slow`);
        })
    });

    $(`form`).submit(function(e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(`#order`).fadeOut();
            $(`.overlay, #thanks`).fadeIn(`slow`);

            $(`form`).trigger(`reset`);
        });
        return false;
    });
     //smooth scroll and pageup

    $(window).scroll(function() {
        if($(this).scrollTop() > 1000) { /* появление кнопки вверх при прокрутке более 1000рх */
            $(`.pageup`).fadeIn();
        } else {
            $(`.pageup`).fadeOut();
        }
    });
     /* плавная перемотка вверх */
   /*  $("a[href=#up]").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false; 
    }); */
    
     /* плавная перемотка к ссылкам */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
     /* ИЗ UDEMY */
     
});