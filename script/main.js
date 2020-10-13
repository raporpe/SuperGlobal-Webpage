
function changeContent(url) {
    
    var webContent = document.getElementById("web-content");

	// Feature detection
	if ( !window.XMLHttpRequest ) return;

	// Create new request
	var xhttp = new XMLHttpRequest();
    
    xhttp.open("GET", url, true);
    xhttp.send();
    
        xhttp.onreadystatechange = function() {
        
        //Status 200 when request status is correct
        if (this.readyState == 4 && this.status == 200) {
           webContent.innerHTML = xhttp.response;
        }
    };
};

function changeActive(obj){
    //Delete active from the other object
    var otherActive = document.getElementsByClassName("active");
    otherActive[0].className = "";
    obj.className = "active";
}

window.onload = function() {
    changeContent("/main.html");
}






