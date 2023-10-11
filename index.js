var i = 0;
var txt = ['Facebook', 'Instagram', 'Twitter'];
var newTextSpeed = 2000;
var typingSpeed = 100;
var eraseSpeed = 30;

var txtIndex = 0;
var charIndex = 0;

function typeWriter() {
    if(charIndex < txt[txtIndex].length){
        if(!document.getElementById("a6").classList.contains("typing"))
        document.getElementById("a6").classList.add("typing");
        document.getElementById("a5").innerHTML += txt[txtIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
    else {
        document.getElementById("a6").classList.remove("typing");
        setTimeout(erase, newTextSpeed);
    }
}

function erase(){
    if(charIndex > 0){
        document.getElementById("a5").innerHTML = txt[txtIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, eraseSpeed);
    }
    else{
        txtIndex++;
        if(txtIndex >= txt.length){
            txtIndex = 0;
        }
        setTimeout(typeWriter, typingSpeed + 250);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(txt.length) setTimeout(typeWriter, typingSpeed + 250);
  });
