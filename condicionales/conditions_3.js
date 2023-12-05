const button = document.querySelector('#myBtn');



button.onclick = function(){

    const num1 = parseInt(prompt("ingrese el primer numero"))
    const num2 = parseInt(prompt("ingrese el segundo numero"))

    if (num1 % num2 == 0){
        alert(`los numeros ${num1} y ${num2} son multiplos`);
    }
    else{
        alert(`los numeros ${num1} y ${num2} no son multiplos`);
    }


}