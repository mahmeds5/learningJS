let n = 10;
let text; 

switch (n){
    case 0:
        text = "It was 0!";
        break;
    case 1:
        text = "Lol it's 1 now";
        break; 
    default:
        text = "Dang it's default.";

}



document.getElementById("pane").innerText = Boolean(10 > 9);
document.getElementById("pane1").innerText = (9 > 10);
document.getElementById("pane2").innerText = text;
document.getElementById("pane3").innerHTML = text;

