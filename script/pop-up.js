$(document).ready(function () {
    
    // Show and hide calendar
    
    $("body").on("click", "#popup-button-calendar", function() {
        console.log("pop");
        $("#popup-wrapper-calendar").show();
    })
                  
    $("body").on("click", "#popup-close-calendar", function(){
        console.log("close");

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
