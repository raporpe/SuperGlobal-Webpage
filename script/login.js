function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    console.log("Username -> " + username);
    console.log("Password -> " + password);

    var hash = MD5(username + password);
    console.log("Hash to find: " + hash);
    var cookies = document.cookie.split(";");
    console.log("Cookies installed: " + cookies);
    var found = false;

    for (i in cookies) {
        if (cookies[i] == hash) {
            found = true;
            console.log("Found cookie:" + cookies[i]);
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
    
    //Serialize information into a cookie
}

function slide_register() {


    console.log("slide to the register");

    // Hide the right part
    document.getElementsByClassName("box-content-right")[0].style.opacity = "0";

    // Movement effect
    document.getElementsByClassName("box-content-right")[0].style.left = "250px";
    document.getElementsByClassName("box-content-left")[0].style.left = "0px";

    //Begin moving to the right
    document.getElementById("slider").style.width = "100%";


    // Make the registration scrollable
    document.getElementsByClassName("box-desktop")[0].style.overflow = "scroll";

    // Change percentages to accomodate to more space
    document.getElementsByClassName("box-content-left")[0].style.width = "60%";
    document.getElementsByClassName("box-content-right")[0].style.width = "40%";


    // Swap contents inside slider with visual effects
    document.getElementById("slider-register").style.left = "0px";
    document.getElementById("slider-register").style.opacity = "1";
    document.getElementById("slider-login").style.right = "-100px";
    document.getElementById("slider-login").style.opacity = "0";

    setTimeout(function () {
        // Follow right effect
        document.getElementById("slider").style.left = "450px";

        // Delayed opacity change for better visuals
        document.getElementsByClassName("box-content-left")[0].style.opacity = "1";

    }, 150); // Delay in ms


}

function slide_login() {

    console.log("slide to the login");

    // Hide the left part
    document.getElementsByClassName("box-content-left")[0].style.opacity = "0";


    // Movement effect
    document.getElementsByClassName("box-content-right")[0].style.left = "350px";
    document.getElementsByClassName("box-content-left")[0].style.left = "2000px";

    //Begin moving to the left
    document.getElementById("slider").style.width = "100%";

    // Make the login not scrollable
    document.getElementsByClassName("box-desktop")[0].style.overflow = "hidden";

    // Change percentages to accomodate to the initial space
    document.getElementsByClassName("box-content-left")[0].style.width = "40%";
    document.getElementsByClassName("box-content-right")[0].style.width = "60%";


    // Swap contents inside slider with visual effects
    document.getElementById("slider-register").style.left = "-200px";
    document.getElementById("slider-register").style.opacity = "0";
    document.getElementById("slider-login").style.right = "160px";
    document.getElementById("slider-login").style.opacity = "1";

    setTimeout(function () {
        // Follow right effect
        document.getElementById("slider").style.left = "0px";

        // Delayed opacity change for better visuals
        document.getElementsByClassName("box-content-right")[0].style.opacity = "1";

        //Restore width
        document.getElementById("slider").style.width = "40%";

    }, 150); // Delay in ms


}


function small_register() {
    document.getElementById("login-content-small").style.display = "none";
    document.getElementById("register-content-small").style.display = "inherit";

}
function small_login() {
    document.getElementById("login-content-small").style.display = "inherit";
    document.getElementById("register-content-small").style.display = "none";

}


window.onload = function () {
    document.getElementById("login").addEventListener("click", login);
    document.getElementById("switch-register-desktop").addEventListener("click", slide_register);
    document.getElementById("switch-login-desktop").addEventListener("click", slide_login);

    document.getElementById("switch-register-small").addEventListener("click", small_register);
    document.getElementById("switch-login-small").addEventListener("click", small_login);
    
    small_login();
    
    cookies = getAllCookies();
    console.log(cookies);
    cookies[0].name = "asdfasfasdfsdfsafsd";
    cookie1 = {
        name: "hoaluuuuuu",
        value: "diego"
    };
    cookie2 = {
        name: "hoalasasasa",
        value: "diego"
    };
    cook = [cookie1, cookie2];
    addCookies(cook);
    
}




