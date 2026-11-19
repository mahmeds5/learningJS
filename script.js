let n = 10;
let text = ""; 

for (let i = 1; i <= 5; i++){
    text = text + i + " ";
    document.getElementById("pane3").innerHTML = text;
}



document.getElementById("pane").innerText = Boolean(10 > 9);
document.getElementById("pane1").innerText = (9 > 10);
document.getElementById("pane2").innerText = text;
//document.getElementById("pane3").innerHTML = text;

