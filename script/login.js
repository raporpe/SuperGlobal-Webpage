$(document).ready(function () {
    $("#login-button").click(login);
    $("#switch-register-desktop").click(slide_register);
    $("#switch-login-desktop").click(slide_login);
    $("#switch-register-small").click(small_register);
    $("#switch-login-small").click(small_login);
    $("#delete").click(reset_form);
    $("#submit").click(register);

//    small_login();

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

    
});


// Resets the registration form to defaults
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
        window.location.href = "/course.html";

    } else {
        //Do nothing
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
            alert("The email is already registered!");
            return;
        }
    }

    //Save registration form info in cookies
    var language = "";
    for (i in register) {
        
        if (register[i]["name"] == "password") {
            var password = register[i]["value"];
        }
        
        if (register[i]["name"] == "language") {
            language += register[i]["value"] + ",";
        }
        
        addCookie(register[i]);
        
    }
    
    // Store the password hashed
    setCookie("password", MD5(password));
    
    // Remove trailing comma and set language
    language = language.replace(/,*$/, "");
    setCookie("language", language);

    $(".box").scrollTop(0);
    alert("Your registration has been recorded");
    reset_form();

    //Detect if in mobile or desktop version
    if ($('#box-header-small').css('display') == 'none') {
        console.log("Sliding in desktop");
        slide_login();
    } else {
        small_login();
    }


}

function slide_register() {

    // Hide the login box
    $("#box-content-login").css("opacity", "0");
    $("#box-content-login").css("z-index", "-1");

    // Movement effect: login moving to the left while fading
    $("#box-content-login").css("right", "550px");

    // Register box begins to appear
    $("#box-content-register").css("opacity", "1");
    $("#box-content-register").css("z-index", "999");

    // Movement effect: register appears from the right
    $("#box-content-register").css("left", "0px");

    // Move blue slider to the left
    $("#slider").css("left", "450px");

    // Make the registration scrollable
    $(".box").css("overflow", "scroll");

    // The register dialog appears in the slider 
    $("#slider-register").css("opacity", "1");
    $("#slider-register").css("z-index", "999");

    // The login dialog disappears in the slider 
    $("#slider-login").css("opacity", "0");
    $("#slider-login").css("z-index", "-1");

}

function slide_login() {
    
    // Hide the register box
    $("#box-content-register").css("opacity", "0");
    $("#box-content-register").css("z-index", "-1");

    // Movement effect: register moving to the right while fading
    $("#box-content-register").css("left", "500px");

    // Login box begins to appear
    $("#box-content-login").css("opacity", "1");
    $("#box-content-login").css("z-index", "999");

    // Movement effect: login appears from the left
    $("#box-content-login").css("right", "0px");

    // Move blue slider to the right
    $("#slider").css("left", "0px");

    // Make the login not scrollable
    $(".box").css("overflow", "hidden");

    // The register dialog disappears in the slider 
    $("#slider-register").css("opacity", "0");
    $("#slider-register").css("z-index", "-1");

    // The login dialog appears in the slider 
    $("#slider-login").css("opacity", "1");
    $("#slider-login").css("z-index", "999");


}



function small_register() {

    $("#box-content-register").css("opacity", 1);
    $("#box-content-register").css("z-index", "999");
    
    $("#box-content-login").css("opacity", 0);
    $("#box-content-login").css("z-index", "-1");

}

function small_login() {

    $("#box-content-register").css("opacity", 0);
    $("#box-content-register").css("z-index", "-1");
    
    $("#box-content-login").css("opacity", 1);
    $("#box-content-login").css("z-index", "999");

}
