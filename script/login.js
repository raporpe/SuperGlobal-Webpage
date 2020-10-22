function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Username -> " + username);
    console.log("Password -> " + password);

    var hash = MD5(username + password);
    console.log("Hash to find: " + hash);
    var cookies = getAllCookies();
    console.log("Cookies installed: " + cookies);
    var found = false;

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

    }
}

function register() {
    //Validate all the fields

    //Save information in a cookie
}

function slide_register() {


    console.log("slide to the register");

    // Hide the right part
    document.getElementById("box-content-login").style.opacity = "0";

    // Movement effect
    document.getElementById("box-content-login").style.left = "250px";
    document.getElementById("box-content-register").style.left = "0px";

    //Begin moving to the right
    document.getElementById("slider").style.width = "100%";


    // Make the registration scrollable
    document.getElementsByClassName("box")[0].style.overflow = "scroll";

    // Change percentages to accomodate to more space
    document.getElementById("box-content-register").style.width = "60%";
    document.getElementById("box-content-login").style.width = "40%";


    // Swap contents inside slider with visual effects
    document.getElementById("slider-register").style.left = "0px";
    document.getElementById("slider-register").style.opacity = "1";
    document.getElementById("slider-login").style.right = "-100px";
    document.getElementById("slider-login").style.opacity = "0";

    setTimeout(function () {
        // Follow right effect
        document.getElementById("slider").style.left = "450px";

        // Delayed opacity change for better visuals
        document.getElementById("box-content-register").style.opacity = "1";

        // Restore width
        document.getElementById("slider").style.width = "40%";


    }, 150); // Delay in ms


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
    //    document.getElementById("box-content-login").style.display = "none";
    //    document.getElementById("box-content-register").style.display = "inherit";
    document.getElementById("box-content-register").style.opacity = "1";
    document.getElementById("box-content-login").style.opacity = "0";
    document.getElementById("box-content-register").style.zIndex = "1";
    document.getElementById("box-content-login").style.zIndex = "-1";

}

function small_login() {
    //    document.getElementById("box-content-login").style.display = "inherit";
    //    document.getElementById("box-content-register").style.display = "none";
    document.getElementById("box-content-register").style.opacity = "0";
    document.getElementById("box-content-login").style.opacity = "1";
    document.getElementById("box-content-register").style.zIndex = "-1";
    document.getElementById("box-content-login").style.zIndex = "1";
}


window.onload = function () {
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("switch-register-desktop").addEventListener("click", slide_register);
    document.getElementById("switch-login-desktop").addEventListener("click", slide_login);

    document.getElementById("switch-register-small").addEventListener("click", small_register);
    document.getElementById("switch-login-small").addEventListener("click", small_login);

    small_login();


}

