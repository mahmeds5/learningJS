let n = -10;
let text = ""; 


do {
    text = text + n + " ";
    n--; 
} while (n > 0);



document.getElementById("pane").innerText = Boolean(10 > 9);
document.getElementById("pane1").innerText = (9 > 10);
document.getElementById("pane2").innerText = text;
document.getElementById("pane3").innerHTML = text;

