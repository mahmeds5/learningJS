let n = 10;
let text = ""; 

while (n > 0) {
    text = text + n + " ";
    n--; 
}



document.getElementById("pane").innerText = Boolean(10 > 9);
document.getElementById("pane1").innerText = (9 > 10);
document.getElementById("pane2").innerText = text;
document.getElementById("pane3").innerHTML = text;

