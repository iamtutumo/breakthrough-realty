function askPassword(){
    var person = prompt("enter the password for Breakthroughgroup");
    if (person == 'sunday') {
        $('#wrapper').fadeIn();
    }else{
        askPassword();
    }
};
$(document).ready(function(){
    $('#wrapper').hide();
    askPassword();
    $('.opaque').css('opacity','1');
    $('.carousel').carousel({
        interval: 3000,
        pause: "false"
    });
     $('.nav-list li a').smoothScroll({
        speed: 1500
    });

    /* Appear */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            var bottom_of_object = $(this).position().top + $(this).outerHeight() - 100;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},500);
            }

        });

    });
});
