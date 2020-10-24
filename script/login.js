$(document).ready(function () {
    $("#login-button").click(login);
    $("#switch-register-desktop").click(slide_register);
    $("#switch-login-desktop").click(slide_login);
    $("#switch-register-small").click(small_register);
    $("#switch-login-small").click(small_login);
    $("#delete").click(reset_form);
    $("#submit").click(register);

    small_login();

    $("#bachelor-degree").fadeOut(500);
    $("#reg_form").on("change", function () {
        if ($(this).find("input[name=role]:checked").val() == "student") {
            $("#bachelor-degree").fadeIn(500);
            $("#comp-eng").attr('required', true);
        } else {
            $("#bachelor-degree").fadeOut(500);
            $("#comp-eng").attr('required', false);
        }
    });

    //Delete all form data and scroll to op
    $("#delete").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });


});


function reset_form() {
    $('#reg_form').trigger("reset");
}


function login() {
    var username = $("#login_username").val();
    var password = $("#login_password").val();
    console.log("Username -> " + username);
    console.log("Password -> " + password);

    var hash = MD5(username + password);
    var token = getCookie("password");

    $("#login-message").fadeOut(500);

    if (username == "" || password == "") {
        $("#login-message").text("The password or username are empty");
        $("#login-message").fadeIn(500);
        return;
    }


    if (token == hash) {
        setCookie("authenticated", "true");
        console.log("Found cookie:" + cookie.value);
        window.location.href = "/course.html";

    } else {
        //Do nothing
        console.log("Cookie not found!");
        $("#login-message").text("The user or password are incorrect");
        $("#login-message").fadeIn(500);


    }
}

function register() {
    //Fields are prevalidated
    var register = $("#reg_form").serializeArray();
    console.log(register);
    for (i in register) {
        
        if (register[i]["name"] == "password") {
            var pass = register[i]["value"];
        } else if (register[i]["name"] == "username") {
            var user = register[i]["value"];
        } else {
            addCookie(register[i]);
        }
    }
    
    setCookie("password", MD5(user+pass));
    
    alert("Your registration has been recorded");
    reset_form();
    slide_login();


    //Save information in a cookie
}

function slide_register() {

    var speed = 300;
    var options = {
        duration: speed,
        queue: false
    };
    var easeType = "easeInOutQuint"

    // Hide the login box
    $("#box-content-login").fadeOut(options, easeType);

    // Movement effect: login moving to the left while fading
    $("#box-content-login").animate({
        "left": "-=550px"
    }, options, easeType);

    // Register box begins to appear
    $("#box-content-register").fadeIn(options, easeType);

    // Movement effect: register appears from the right
    $("#box-content-register").animate({
        "left": "0px"
    }, options, easeType);


    // Move blue slider to the left
    $("#slider").animate({
        "left": "450px",
    }, options, easeType);


    // Make the registration scrollable
    $(".box").css({
        "overflow": "scroll"
    });


    // The register dialog appears in the slider 
    $("#slider-register").fadeIn(options, easeType);

    // The login dialog disappears in the slider 
    $("#slider-login").fadeOut(options, easeType);




}

function slide_login() {

    var speed = 300;
    var options = {
        duration: speed,
        queue: false
    };
    var easeType = "easeInOutQuint"

    // Hide the register box
    $("#box-content-register").fadeOut(options, easeType);

    // Movement effect: register moving to the right while fading
    $("#box-content-register").animate({
        "left": "+=500px"
    }, options, easeType);

    // Login box begins to appear
    $("#box-content-login").fadeIn(options, easeType);

    // Movement effect: login appears from the left
    $("#box-content-login").animate({
        "left": "300px"
    }, options, easeType);


    // Move blue slider to the right
    $("#slider").animate({
        "left": "0px"
    }, options, easeType);


    // Make the login not scrollable
    $(".box").css({
        "overflow": "hidden"
    });


    // The register dialog disappears in the slider 
    $("#slider-register").fadeOut(options, easeType);

    // The login dialog appears in the slider 
    $("#slider-login").fadeIn(options, easeType);



}


function small_register() {

    //    $("#box-content-register").show();
    //    $("#box-content-login").hide();

}

function small_login() {

    //    $("#box-content-register").hide();
    //    $("#box-content-login").show();

}
