// load header,footer
$( "#navigation-bar" ).load( "component/navigation.html #navigation", function( response, status, xhr ) {
    if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
});
//顯示 footer
$( "#footer" ).load( "component/footer.html #footer", function( response, status, xhr ) {
    if ( status == "error" ) {
        var msg = "Sorry but there was an error: ";
        $( "#error" ).html( msg + xhr.status + " " + xhr.statusText );
    }
});

// popup nav
$(document).ready(() =>{
    //navbar scroll effection
    $(window).scroll(() => {
        scrolledPx = $(this).scrollTop();
        if(scrolledPx >= 200){
            $('.navbar').addClass('active');
        }else{
            $('.navbar').removeClass('active');
        }
    })

    //rwd navbar
    $('.popup__nav').on('click',function(){
        $(this).toggleClass('active');
        $('.navbar .nav').toggleClass('active');
    })
    $('.nav__link').on('click',function(){
        $('.popup__nav').toggleClass('active');
        $('.navbar .nav').removeClass('active');
    })

    //question card
    $('.more').on('click',function(){
        $(this).hide();
        $('#'+this.id+'.close').show();
        $('#'+this.id+'-ans').show();
    })
    $('.close').on('click',function(){
        $(this).hide();
        $('#'+this.id+'.more').show();
        $('#'+this.id+'-ans').hide();
    })

    
})