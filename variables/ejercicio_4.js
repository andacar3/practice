const button = document.querySelector('#myBtn');

button.onclick = function() {

    const num1 = parseFloat (prompt("ingrese el primer numero"))
    const num2 = parseFloat (prompt("ingrese el segundo numero"))
    const num3 = parseFloat (prompt("ingrese el tercer numero"))
    const num4 = parseFloat (prompt("ingrese el cuarto numero"))

    const sum = (num1 + num2 + num3 + num4)
    const median = sum / 4

    alert(`la media es ${median}`);


}