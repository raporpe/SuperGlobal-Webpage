window.onload = function() {
    var button = document.getElementById('popup-button');
    var popup = document.getElementsByClassName('popup-wrapper')[0];
    var close = document.getElementsByClassName('popup-close')[0];
    

    
    button.addEventListener('click', function() {
        popup.style.display = 'block';
    });
 
    close.addEventListener('click', function() {
        popup.style.display = 'none';
    });
 
    popup.addEventListener('click', function() {
        popup.style.display = 'none';
    });
}

