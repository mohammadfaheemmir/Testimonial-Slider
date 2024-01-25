var slide = document.getElementById('slide');

var upArrow = document.getElementById('up-arrow');

var downArrow = document.getElementById('down-arrow');

let x = 0;

upArrow.onclick = function() {
    if(x > "-900"){
        x = x - 300;
        slide.style.top = x + 'px';
    }
}

downArrow.onclick = function() {
    if(x < 0){
        x = x + 300;
        slide.style.top = x + 'px';
    }
}