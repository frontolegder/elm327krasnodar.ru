$(document).ready(function(){
   

   


    //modal
    $(`[data-modal=support]`).on(`click`, function() { /* модальное окно заказа */
        $(`.overlay, #support`).fadeIn(`slow`)
    });
    //kartochki
    $(`#a1`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(1)`).fadeIn(`slow`)
    });
    $(`#a2`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(2)`).fadeIn(`slow`)
    });
    $(`#a3`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(3)`).fadeIn(`slow`)
    });
    $(`#a4`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(4)`).fadeIn(`slow`)
    });
    $(`#a5`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(5)`).fadeIn(`slow`)
    });
    $(`#a6`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(6)`).fadeIn(`slow`)
    });
    $(`#a7`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(7)`).fadeIn(`slow`)
    });
    $(`#a8`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(8)`).fadeIn(`slow`)
    });
    $(`#a9`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(9)`).fadeIn(`slow`)
    });
    $(`#a10`).on(`click`, function() {
        $(`.overlayCard, .scpec:nth-child(10)`).fadeIn(`slow`)
    });
    $(`#a11`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(11)`).fadeIn(`slow`)
    })
    $(`#a12`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(12)`).fadeIn(`slow`)
    });
    $(`#a13`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(13)`).fadeIn(`slow`)
    });
    $(`#a14`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(14)`).fadeIn(`slow`)
    });
    $(`#a15`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(15)`).fadeIn(`slow`)
    });
    $(`#a16`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(16)`).fadeIn(`slow`)
    });
    $(`#a17`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(17)`).fadeIn(`slow`)
    });
    $(`#a18`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(18)`).fadeIn(`slow`)
    });
    $(`#a19`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(19)`).fadeIn(`slow`)
    });
    $(`#a20`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(20)`).fadeIn(`slow`)
    });
    //kuleriy
    $(`#q1`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(21)`).fadeIn(`slow`)
    });
    $(`#q2`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(22)`).fadeIn(`slow`)
    });
    $(`#q3`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(23)`).fadeIn(`slow`)
    });
    $(`#q4`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(24)`).fadeIn(`slow`)
    });
    $(`#q5`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(25)`).fadeIn(`slow`)
    });
    $(`#q6`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(26)`).fadeIn(`slow`)
    });
    $(`#q7`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(27)`).fadeIn(`slow`)
    });
    $(`#q8`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(28)`).fadeIn(`slow`)
    });
    $(`#q9`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(29)`).fadeIn(`slow`)
    });
    $(`#q10`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(30)`).fadeIn(`slow`)
    });
    $(`#q11`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(31)`).fadeIn(`slow`)
    });
    $(`#q12`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(32)`).fadeIn(`slow`)
    });
    $(`#q13`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(33)`).fadeIn(`slow`)
    });
    $(`#q14`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(34)`).fadeIn(`slow`)
    });
    $(`#q15`).on(`click`, function() { 
        $(`.overlayCard, .scpec:nth-child(35)`).fadeIn(`slow`)
    });




    /*  работа крестика красного */
    $(`.modal__close`).on(`click`, function() {
        $(`.overlay, #thanks, #support, .overlayCard, .scpec:nth-child(1), .scpec:nth-child(2), .scpec:nth-child(3), .scpec:nth-child(4), .scpec:nth-child(5), .scpec:nth-child(6), .scpec:nth-child(7), .scpec:nth-child(8), .scpec:nth-child(9), .scpec:nth-child(10), .scpec:nth-child(11), .scpec:nth-child(12), .scpec:nth-child(13), .scpec:nth-child(14), .scpec:nth-child(15), .scpec:nth-child(16), .scpec:nth-child(17), .scpec:nth-child(18), .scpec:nth-child(19), .scpec:nth-child(20), .scpec:nth-child(21), .scpec:nth-child(22), .scpec:nth-child(23), .scpec:nth-child(24), .scpec:nth-child(25), .scpec:nth-child(26), .scpec:nth-child(27), .scpec:nth-child(28), .scpec:nth-child(29), .scpec:nth-child(30), .scpec:nth-child(31), .scpec:nth-child(32), .scpec:nth-child(33), .scpec:nth-child(34), .scpec:nth-child(35)`).fadeOut(`slow`)
    });
   

    

    $(`form`).submit(function(e) { 
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $(`#support`).fadeOut();
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

    /* умное липкое меню */
    var header = $('.header'),
	scrollPrev = 0;

    $(window).scroll(function() {
        var scrolled = $(window).scrollTop();
    
        if ( scrolled > 40 && scrolled > scrollPrev ) {
            header.addClass('header_out');
        } else {
            header.removeClass('header_out');
        }
        scrollPrev = scrolled;
    });
    
     
    
     /* плавная перемотка к ссылкам */
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });

    
    /* отключение ховер на мобильных */
    $('.hover').on('touchstart touchend', function(e) {/* поставил : для проверки */
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
     /* кнопка показать еще... */

    $('[data-modal=moreAqua]').click(function() {

        $('.cardWrap:nth-child(1n+9)').fadeToggle('slow');

        var $this = $(this);
    
        $this.toggleClass('Смотреть ещё...');
    
        if ($this.hasClass('Смотреть ещё...')) {
            $this.text('Скрыть');
        } else {
            $this.text('Смотреть ещё...');
        }
        
    });

    $('[data-modal=moreKuler]').click(function() {

        $('.cardWrapKuler:nth-child(1n+5)').fadeToggle('slow');

        var $this = $(this);
    
        $this.toggleClass('Смотреть ещё...');
    
        if ($this.hasClass('Смотреть ещё...')) {
            $this.text('Скрыть');
        } else {
            $this.text('Смотреть ещё...');
        }
        
    });

});