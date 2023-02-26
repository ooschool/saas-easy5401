// popup nav
$(document).ready(() =>{
    $(window).scroll(() => {
        scrolledPx = $(this).scrollTop();
        if(scrolledPx >= 200){
            $('.navbar').addClass('active');
        }else{
            $('.navbar').removeClass('active');
        }
    })

    $('.popup-nav').on('click',function(){
        $(this).toggleClass('active');
        $('.navbar .nav').toggleClass('active');
    })
    $('.nav-link').on('click',function(){
        $('.navbar .nav').removeClass('active');
    })
})