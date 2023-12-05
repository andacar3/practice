const button = document.querySelector('#myBtn');

button.onclick = function(){
    const precio1 = parseInt(prompt("ingrese el precio 1"));
    const precio2 = parseInt(prompt("ingrese el precio 2"));
    const precio3 = parseInt(prompt("ingrese el precio 3"));



    let suma = 0;

    if (precio1 <= precio2 && precio1 <= precio3) {
        if (precio2 <= precio3) {
            suma = precio1 + precio2;
        } else {
            suma = precio1 + precio3;
        }
    } else if (precio2 <= precio1 && precio2 <= precio3) {
        if (precio1 <= precio3) {
            suma = precio2 + precio1;
        } else {
            suma = precio2 + precio3;
        }
    } else {
        if (precio1 <= precio2) {
            suma = precio3 + precio1;
        } else {
            suma = precio3 + precio2;
        }
    }

    alert(`la suma de los 2 mas bajos es ${suma}`)
}