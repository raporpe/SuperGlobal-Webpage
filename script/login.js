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

    $("#login-message").fadeOut(500);

    if (username == "" || password == "") {
        $("#login-message").text("The password or username are empty");
        $("#login-message").fadeIn(500);
        return;
    }


    var hashedPassword = MD5(password);
    var hashedCookie = getCookie("password");

    if (hashedPassword == hashedCookie) {
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

    //Check if email already exists
    var alreadyRegisteredEmail = getCookie("email");
    for (i in register) {
        //Get the form email and compare it to the one stored in the cookie
        if (register[i]["name"] == "email" && register[i]["value"] == alreadyRegisteredEmail) {
            alert("The email is already registered");
            return;
        }
    }

    //Extract password value
    for (i in register) {
        if (register[i]["name"] == "password") {
            var password = register[i]["value"];
        }
        addCookie(register[i]);
    }

    // Store the password hashed with md5
    setCookie("password", MD5(password));


    alert("Your registration has been recorded");
    reset_form();

    //Detect if in mobile or desktop version
    if ($('#box-header-small').css('display') == 'none') {
        slide_login();
    } else {
        small_login();
    }


    //Save information in a cookie
}

function slide_register() {

    var speed = 300;
    var options = {
        duration: speed,
        queue: false,
        easing: "easeInOutQuint",
    };

    // Hide the login box
    $("#box-content-login").fadeOut(options);

    // Movement effect: login moving to the left while fading
    $("#box-content-login").animate({
        "right": "550px"
    }, options);

    // Register box begins to appear
    $("#box-content-register").fadeIn(options);

    // Movement effect: register appears from the right
    $("#box-content-register").animate({
        "left": "0px"
    }, options);


    // Move blue slider to the left
    $("#slider").animate({
        "left": "450px",
    }, options);


    // Make the registration scrollable
    $(".box").css({
        "overflow": "scroll"
    });


    // The register dialog appears in the slider 
    $("#slider-register").fadeIn(options);

    // The login dialog disappears in the slider 
    $("#slider-login").fadeOut(options);

}

function slide_login() {

    var speed = 300;
    var options = {
        duration: speed,
        queue: false,
        easing: "easeInOutQuint",
    };


    // Hide the register box
    $("#box-content-register").fadeOut(options);

    // Movement effect: register moving to the right while fading
    $("#box-content-register").animate({
        "left": "+=500px"
    }, options);

    // Login box begins to appear
    $("#box-content-login").fadeIn(options);

    // Movement effect: login appears from the left
    $("#box-content-login").animate({
        "right": "0px"
    }, options);


    // Move blue slider to the right
    $("#slider").animate({
        "left": "0px"
    }, options);


    // Make the login not scrollable
    $(".box").css({
        "overflow": "hidden"
    });


    // The register dialog disappears in the slider 
    $("#slider-register").fadeOut(options);

    // The login dialog appears in the slider 
    $("#slider-login").fadeIn(options);


}


function small_register() {

    $("#box-content-register").fadeIn(500);
    $("#box-content-login").fadeOut(500);

}

function small_login() {

    $("#box-content-register").fadeOut(500);
    $("#box-content-login").fadeIn(500);

}
