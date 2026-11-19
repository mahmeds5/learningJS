let n = 10;
let text; 

switch (n){
    case 0:
        text = "Sunday";
        break;
    case 10:
    case 3:
        text = "testing mutli case";
        break; 
    default:
        text = "Dang it's default.";

}



document.getElementById("pane").innerText = text;
document.getElementById("pane1").innerText = text;
document.getElementById("pane2").innerText = text;
document.getElementById("pane3").innerHTML = text;

