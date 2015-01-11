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
});
