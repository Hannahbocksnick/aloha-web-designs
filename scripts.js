$('document').ready(function(){
    

     $('.hamburger-button').click(function(){
        $(this).toggleClass('active');
        $('.mobile-menu').fadeToggle(1000);
    });


    // Animate on Scroll - Activate

    AOS.init();

    

});