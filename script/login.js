$(document).ready(function () {

    // Add handlers for button clicks
    $("#login-button").click(login);
    $("#switch-register-desktop").click(slide_register);
    $("#switch-login-desktop").click(slide_login);
    $("#switch-register-small").click(small_register);
    $("#switch-login-small").click(small_login);
    $("#delete").click(reset_form);
    $("#submit").click(register);

    // The student only div is hidden by default in the registration form
    $("#student-only").fadeOut(500);

    // Call function to update the form when student is selected as role
    $("#reg_form").on("change", updateForm);
    
    // Redirect to home page on click
    $(".home-button").click(function(){
        window.location.href = "/index.html";
    })
    $(".header-home-button").click(function(){
        window.location.href = "/index.html";
    })

});

// Updates the form to include student only div selection when student is selected in role
function updateForm() {
    if ($(this).find("input[name=role]:checked").val() == "student") {
        $("#student-only").fadeIn(500);
        $("#comp-eng").attr('required', true);
        $("#working-group").attr('required', true);
        
    } else {
        $("#student-only").fadeOut(500);
        $("#comp-eng").attr('required', false);
        $("#working-group").attr('required', false);
    }
}

// Resets the registration form to defaults
function reset_form() {
    $('#reg_form').trigger("reset");
}


function login() {
    var email = $("#login_email").val();
    var password = $("#login_password").val();

    // Hide login message in case a previous one was triggered
    $("#login-message").fadeOut(500);

    // Check for empty fields
    if (email == "" || password == "") {
        $("#login-message").text("The password or email are empty");
        $("#login-message").fadeIn(500);
        return;
    }

    // Compare the entered password hashed with the already stored password hashed
    var hashedPassword = MD5(password);
    var hashedCookie = getCookie("password");

    // Authentication success
    if (hashedPassword == hashedCookie) {
        setCookie("authenticated", "true");
        window.location.href = "/home.html";

    } else {
        // Authentication fail. Show message.
        $("#login-message").text("The user or password are incorrect");
        $("#login-message").fadeIn(500);

    }
}

function register() {
    
    // Fields are prevalidated and do not need checks
    var register = $("#reg_form").serializeArray();

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
        } else if (register[i]["name"] == "language") {
            language += register[i]["value"] + ",";
        } else {
            addCookie(register[i]);
        }

    }

    // Store the password hashed
    setCookie("password", MD5(password));

    // Remove trailing comma and set language cookie
    language = language.replace(/,*$/, "");
    setCookie("language", language);

    // Successful registration, move to login.
    alert("Your registration has been recorded");
    reset_form();

    //Move to login. Detect if in mobile or desktop version to execute correct function.
    if ($('.box-header-small').css('display') == 'none') {
        slide_login();
    } else {
        small_login();
    }


}


// Called to make animation sliding to register form in desktop mode 
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

// Called to make animation sliding to login form in desktop mode 
function slide_login() {
    
    // Go to top
    $(".box").scrollTop(0);

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


// Called to make animation sliding to register form in mobile mode 
function small_register() {

    // Show #box-content-register
    $("#box-content-register").css("opacity", 1);
    $("#box-content-register").css("z-index", "999");

    // Hide #box-content-login
    $("#box-content-login").css("opacity", 0);
    $("#box-content-login").css("z-index", "-1");

}

// Called to make animation sliding to login form in mobile mode 
function small_login() {
    
    // Go to top
    $(".box").scrollTop(0);

    // Hide #box-content-register
    $("#box-content-register").css("opacity", 0);
    $("#box-content-register").css("z-index", "-1");

    // Show #box-content-login
    $("#box-content-login").css("opacity", 1);
    $("#box-content-login").css("z-index", "999");

}
