const button = document.querySelector('#myBtn');



button.onclick = function(){

    const num1 = parseInt(prompt("ingrese el primer numero"));
    const num2 = parseInt(prompt("ingrese el segundo numero"));

    if (num1 > num2){
        alert(`el numero ${num1} es mayor que ${num2}`);
    }
    else{
        alert(`el numero ${num2} es mayor que ${num1}`);
    }


}