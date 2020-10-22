$(document).ready(function () {
    $("#login-button").click(login);
    $("#switch-register-desktop").click(slide_register);
    $("#switch-login-desktop").click(slide_login);
    $("#switch-register-small").click(small_register);
    $("#switch-login-small").click(small_login);
    small_login();

    $("#bachelor-degree").fadeOut(500);
    $("#reg_form").on("change", function () {
        if ($(this).find("input[name=role]:checked").val() == "student") {
            $("#bachelor-degree").fadeIn(500);
        } else {
            $("#bachelor-degree").fadeOut(500);
        }
    });

    //Delete all form data and scroll to op
    $("#delete").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });
    
    
});


function login() {
    var username = $("#login_username").val();
    var password = $("#login_password").val();
    console.log("Username -> " + username);
    console.log("Password -> " + password);

    var hash = MD5(username + password);
    console.log("Hash to find: " + hash);
    var cookies = getAllCookies();
    console.log("Cookies installed: " + cookies);
    var found = false;
    $("#login-message").fadeOut(500);

    if (username == "" || password == "") {
        $("#login-message").text("The password or username are empty");
        $("#login-message").fadeIn(500);

        return;
    }


    for (i in cookies) {
        cookie = cookies[i];
        if (cookie.name == "loginHash" && cookie.value == hash) {
            found = true;
            setCookie("authenticated", "true");
            console.log("Found cookie:" + cookie.value);
        }
    }

    if (found == true) {
        window.location.href = "/course.html";
        console.log("Cookies found, redirecting");
    } else {
        //Do nothing
        console.log("Cookie not found!");
        $("#login-message").text("The user or password are incorrect");
        $("#login-message").fadeIn(500);


    }
}

function register() {
    //Validate all the fields

    //Save information in a cookie
}

function slide_register() {

    var speed = 300;
    var options = {
        duration: speed,
        queue: false
    };
    var easeType = "easeInOutQuint"
    console.log("slide to the register");

    // Hide the login part
    $("#box-content-login").fadeOut(options, easeType);

    // Movement effect: login to the left fading and 
    $("#box-content-login").animate({
        "left": "-=550px"
    }, options, easeType);
    
    // Movement effect: register appears from the right
    $("#box-content-register").animate({
        "left": "0px"
    }, options, easeType);
    

    $("#slider").animate({
        "left": "450px"
    }, options, easeType);
    

    $("#box-content-register").fadeIn(options, easeType);

    // Make the registration scrollable
    $(".box").css({
        "overflow": "scroll"
    });


    // Swap contents inside slider with visual effects
    $("#slider-register").animate({
        "left": "0px"
    }, options, easeType);
    
    
    $("#slider-register").fadeIn(options, easeType);
    
    
    $("#slider-login").animate({
        "right": "-100px"
    }, options, easeType);
    
    
    $("#slider-login").fadeOut(options, easeType);



}

function slide_login() {

    console.log("slide to the login");

    // Hide the left part
    document.getElementById("box-content-register").style.opacity = "0";


    // Movement effect
    document.getElementById("box-content-login").style.left = "300px";
    document.getElementById("box-content-register").style.left = "2000px";

    //Begin moving to the left
    document.getElementById("slider").style.width = "100%";

    // Make the login not scrollable
    document.getElementsByClassName("box")[0].style.overflow = "hidden";

    // Change percentages to accomodate to the initial space
    document.getElementById("box-content-register").style.width = "40%";
    document.getElementById("box-content-login").style.width = "60%";


    // Swap contents inside slider with visual effects
    document.getElementById("slider-register").style.left = "-200px";
    document.getElementById("slider-register").style.opacity = "0";
    document.getElementById("slider-login").style.right = "160px";
    document.getElementById("slider-login").style.opacity = "1";

    setTimeout(function () {
        // Follow right effect
        document.getElementById("slider").style.left = "0px";

        // Delayed opacity change for better visuals
        document.getElementById("box-content-login").style.opacity = "1";

        //Restore width
        document.getElementById("slider").style.width = "40%";

    }, 150); // Delay in ms


}


function small_register() {

    //    $("#box-content-register").show();
    //    $("#box-content-login").hide();

}

function small_login() {

    //    $("#box-content-register").hide();
    //    $("#box-content-login").show();

}
