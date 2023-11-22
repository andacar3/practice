const button = document.querySelector('#myBtn');

button.onclick = function() {

    const num1 = parseFloat (prompt("ingrese la primera resistencia"))
    const num2 = parseFloat (prompt("ingrese la segunda resistencia"))

    eqRes = (num1 * num2)/(num1 + num2)


    alert(`la resistencia equivalente es ${eqRes}`);


}