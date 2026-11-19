let n = -10;
let text = ""; 


for (let i = 0; i < 10; i++){
    if (i == 4) continue;
    text = text + i; 
}






document.getElementById("pane").innerText = Boolean(10 > 9);
document.getElementById("pane1").innerText = (9 > 10);
document.getElementById("pane2").innerText = text;
document.getElementById("pane3").innerHTML = text;

