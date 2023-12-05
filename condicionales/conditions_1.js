const button = document.querySelector('#myBtn');

button.onclick = function() {

const answer = prompt("es culpable? (ingrese si o no)");

if (answer == "si"){
    alert(`usted es culpable`);
}
else{
    if (answer == "no"){
        alert(`usted es inocente`);
    }
    else{
        alert(`respuesta invalida`);
    }
}


}