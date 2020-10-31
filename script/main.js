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

// Gets the contents in the specified url and returns them
// in the first argument of the callback function
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

// Modifies the content of the div with id "web-content"
function changeWebContentTo(changeTo) {
    
    //Callback function used to insert new content when it has been downloaded
    var callback = function (html) {
        $("#web-content").html(html);
        updateContentRole();
    }
    
    getContent(changeTo, callback);
    
}

// Checks if the user has authenticated
function checkLoggedIn() {
    if (getCookie("authenticated") != "true") {
        // Redirect to login
        //window.location.href = "/index.html";
    }
}

// Changes the authentication flag to false and calls function to return to login
function logOut() {
    setCookie("authenticated", "false");    
    checkLoggedIn();
}

// Updates the page with custom content according to the selected role in the registration
function updateContentRole() {
    
    var role = getCookie("role");
    
    // Set the username 
    $(".display-username").html(getCookie("username"));
    $(".display-name").html(getCookie("name"));

    // Set the profile photo
    $(".profile-image").attr("src", "images/students/" + getCookie("username") + ".png");

    // Hide content from other roles
    if (role == "teacher" || role == "administrator") {
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



function postMessage() {
    //    
    var message = $("#message").val();
    var newPost = $("#write-forum").html();
    var newPost = '<div class="card-forum" id="just-posted">' + newPost + '</div>';
    var newPost = newPost.replace("message-wrapper", "post-wrapper");
    $("#thread").append(newPost);
    
    $("#just-posted").children(".l-8").html("<p>" + message + "</p>");
    $("#just-posted").children(".forum-profile").append("<p>" + "Just now" + "</p>")
    $("#just-posted").removeAttr("id");
    
}
