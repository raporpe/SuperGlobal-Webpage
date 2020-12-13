$(document).ready(function () {

    // Sets the initial content
    changeWebContentTo("/course.html");

    // Do not allow unuthenticated users
//    checkLoggedIn();
    
    // Fill the page with custom content
    updateContentRole();

    //Check log in authentication every 5 seconds
//    setInterval(function () {
//        checkLoggedIn();
//    }, 5000);

    // Listener for forum post button
    $(document).on("click", "#post", postMessage);
    
    $("#go-to-login").click(function(){
            window.location.href = "/login.html";
    })
    

});

// Gets the contents in the specified url and returns them
// in the first argument of the callback function
function getContent(url, callback) {

    // Feature detection
    if (!window.XMLHttpRequest) console.log("The browser does not support this functionality");

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


// Modifies the content of the div with id "web-content"
function changeWebContentTo(changeTo) {

    //Callback function used to insert new content when it has been downloaded
    var callback = function (html) {
        $("#web-content").html(html);
        
        // Check if dynamic content must be updated
        updateContentRole();
    }

    getContent(changeTo, callback);

}

// Adds the active class to the passed object to the function
function changeActive(obj) {
    //Delete active from the other object
    var otherActive = document.getElementsByClassName("active");
    otherActive[0].className = "";
    obj.className = "active";
}


// Checks if the user has authenticated
function checkLoggedIn() {
    if (getCookie("authenticated") != "true") {
        // Redirect to login
        window.location.href = "/login.html";
    }
}

// Changes the authentication flag to false and calls function to return to login
function logOut() {
    setCookie("authenticated", "false");
    checkLoggedIn();
}

// Updates the page with custom content according to the selected role in the registration
function updateContentRole() {

    // Set the username
    $(".display-username").html(getCookie("username"));

    // Set the user name
    $(".display-name").html(getCookie("name"));

    // Set the profile photo
    $(".profile-image").attr("src", "images/students/" + getCookie("username") + ".png");

    // Hide content from other roles.
    // Administrators and teachers have the same privileges.
    var role = getCookie("role");
    if (role == "teacher" || role == "administrator") {
        $(".show-teachers").attr("style", "display:inherit !important");
    } else if (role == "student") {
        $(".show-students").attr("style", "display:inherit !important");
    }

}



// Retrieves the text from the forum post input and appends a new entry to the already existing ones.
function postMessage() {

    // Get the message
    var message = $("#message").val();

    // Copy the post template
    var newPost = $("#write-forum").html();
    var newPost = '<div class="card-message" id="just-posted">' + newPost + '</div>';
    var newPost = newPost.replace("message-wrapper", "post-wrapper");

    // Append new post template
    $("#thread").append(newPost);

    // Edit the appended content: include message, time and remove id to comply with DOM.
    $("#just-posted").children(".l-8").html("<p>" + message + "</p>");
    $("#just-posted").children(".forum-profile").append("<p>" + "Just now" + "</p>")
    $("#just-posted").removeAttr("id");

}
