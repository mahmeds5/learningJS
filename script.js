let a,x,y,z,b;

let age = 10;
let text; 
let suprise; 

if (isNaN(age)) text = "Sorry, not a Number"; else text = "Ooooooh ok, you're " + age; 

if (Math.random() < 0.5){
    suprise = "<a href = 'www.google.com'>google</a>"
} else {
    suprise = "<a href = 'www.bing.com'>Bing</a>"
}

document.getElementById("pane").innerText = text;
document.getElementById("pane1").innerText = a > b;
document.getElementById("pane2").innerText = y;
document.getElementById("pane3").innerHTML = suprise;

