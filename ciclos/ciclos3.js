const button = document.querySelector('#myBtn')


button.onclick =function(){
let cont = parseInt(prompt("ingrese el numero a calcular"));
let cont_fact = cont;
for (let i = cont - 1; i >= 1 ; i--) {
 cont_fact = cont_fact * i
    
}

alert(`el factorial es ${cont_fact}`);

}