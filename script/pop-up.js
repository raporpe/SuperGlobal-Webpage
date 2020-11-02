$(document).ready(function () {
    
    // Show and hide calendar
    // The selector is set to "body" so that the button works when dynamically loaded
    $("body").on("click", "#popup-button-calendar", function() {
        $("#popup-wrapper-calendar").show();
    })
                  
    $("body").on("click", "#popup-close-calendar", function(){
        $("#popup-wrapper-calendar").hide();
    });
    
    
    // Logout window popup
    $("#popup-button-logout").click(function(){
        $("#popup-wrapper-logout").show();
    });
    
    $("#popup-close-logout").click(function(){
        $("#popup-wrapper-logout").hide();
    });

});
