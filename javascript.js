
$('.hamburger-button').click(function(){
    $('.mobile-menu').fadeToggle(1000);
    $(this).toggleClass('active');
});


// Typing Animation
var typed = new Typed('#typed', {
	stringsElement: '#typed-strings'
});