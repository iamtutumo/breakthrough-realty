function askPassword(){
    var person = prompt("enter the password for Breakthroughgroup");
    if (person == 'sunday') {
        $('#wrapper').fadeIn();
    }else{
        askPassword();
    }
};
$(document).ready(function(){
    //$('#wrapper').hide();
    //askPassword();
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

    var form = $('#ajax-contact');

    // Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
    $(form).submit(function(event) {
        // Stop the browser from submitting the form.
        event.preventDefault();
        var formData = $(form).serialize();
        $.ajax({
            type: 'POST',
            url: $(form).attr('action'),
            data: formData
        }).done(function(response) {
            // Make sure that the formMessages div has the 'success' class.
            $(formMessages).removeClass('error');
            $(formMessages).addClass('success');

            // Set the message text.
            $(formMessages).text(response);

            // Clear the form.
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        }).fail(function(data) {
            // Make sure that the formMessages div has the 'error' class.
            $(formMessages).removeClass('success');
            $(formMessages).addClass('error');

            // Set the message text.
            if (data.responseText !== '') {
                $(formMessages).text(data.responseText);
            } else {
                $(formMessages).text('Oops! An error occured and your message could not be sent.');
            }
        });
    });

});
