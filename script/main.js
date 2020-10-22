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
    });
}

window.onload = function () {

    changeWebContentTo("/main.html");

    //checkLoggedIn();

    //Check log in every 5 seconds
    setInterval(function () {
        //checkLoggedIn();
    }, 5000);

}

function checkLoggedIn() {
    if (getCookie("loginHash") == undefined) {
        // Redirect to login
        window.location.href = "/index.html";
    }

}
