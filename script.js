let n = -10;
let oddText = ""; 
let evenText = ""; 

for (let i = 0; i < 10; i++){
    if (i % 2 == 0) continue;
    oddText += i + " ";
}

for (let i = 0; i < 10; i++){
    if (i % 2 != 0) continue;
    evenText += i + " ";
}

document.getElementById("pane").innerText = Boolean(10 > 9);
document.getElementById("pane1").innerText = (9 > 10);
document.getElementById("pane2").innerText = oddText;
document.getElementById("pane3").innerHTML = evenText;

