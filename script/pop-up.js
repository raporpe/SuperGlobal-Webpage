$(document).ready(function () {
                  
    $("#popup-button-calendar").click(function(){
        $("#popup-wrapper-calendar").show();
    });
    
    $("#popup-close-calendar").click(function(){
        $("#popup-wrapper-calendar").hide();
    });

    $("#popup-button-logout").click(function(){
        $("#popup-wrapper-logout").show();
    });
    
    $("#popup-close-logout").click(function(){
        $("#popup-wrapper-logout").hide();
    });

});
