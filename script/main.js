function getContent(url, callback) {

    // Feature detection
    if (!window.XMLHttpRequest) console.log("The browser does not this functionality");

    // Create new request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {

        //Status 200 when request status is correct
        if (this.readyState == 4 && this.status == 200) {
            callback(xhttp.responseText);
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();


};

function changeActive(obj) {
    //Delete active from the other object
    var otherActive = document.getElementsByClassName("active");
    otherActive[0].className = "";
    obj.className = "active";
}

function changeWebContentTo(changeTo) {
    var webContent = document.getElementById("web-content");
    getContent(changeTo, function (html) {
        webContent.innerHTML = html;
        updateContentRole();
    });
}


function checkLoggedIn() {
    if (getCookie("authenticated") != "true") {
        // Redirect to login
        window.location.href = "/index.html";
    }

}

function updateContentRole() {
    var role = getCookie("role");
    console.log(role);
    
    // Set the username
    $(".display-username").html(getCookie("username"));
    // Set the profile photo
    // Check first if the 
    $(".profile-image").attr("src","images/students/" + getCookie("username") + ".png");
    
    // Hide content from other roles
    if (role == "teacher") {
        $(".show-only-students").hide();
        $(".show-only-teachers").show();
    } else if (role == "student") {
        $(".show-only-students").show();
        $(".show-only-teachers").hide();
    } else {
        $(".show-only-students").hide();
        $(".show-only-teachers").hide();
    }

}

$(document).ready(function () {

    changeWebContentTo("/main.html");

    checkLoggedIn();
    updateContentRole();

    //Check log in every 5 seconds
    setInterval(function () {
        checkLoggedIn();
    }, 5000);

//    $(document).on("change", "#web-content", updateContentRole);
    
    $(document).on("click", "#post", postMessage);

});

var postMessage = function () {
//    
//    var message = $("#message").val();
//    $("#write-forum")
//    $("#message-wrapper").html("<p>" + message + "</p>")
//    $("#thread").append(message);
}
