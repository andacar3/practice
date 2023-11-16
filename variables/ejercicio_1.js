const button = document.querySelector('#myBtn');


button.onclick = function(){

    const input = document.querySelector('#Number')
    console.log(input.value)
    const num = input.value;
    //let num = prompt("ingrese un numero");
    alert(`el numero que ud ha ingresado es ${num} gracias`);

}
