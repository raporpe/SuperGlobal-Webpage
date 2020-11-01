$(document).ready(function () {
    
    // Show and hide calendar
    
    $("#web-content").on("click", "#popup-button-calendar", function() {
        $("#popup-wrapper-calendar").show();
    })
                  
    $("#web-content").on("click", "#popup-close-calendar", function(){
        $("#popup-wrapper-calendar").hide();
    });
    
    
    // Logout window
    
    $("#popup-button-logout").click(function(){
        $("#popup-wrapper-logout").show();
    });
    
    $("#popup-close-logout").click(function(){
        $("#popup-wrapper-logout").hide();
    });

});
