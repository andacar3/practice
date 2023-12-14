const button = document.querySelector('#myBtn')


button.onclick =function(){
let cont = 1;
let cont_double;
while (cont <= 5) {
cont_double = cont * 2;
cont = cont + 1;    
}

alert(`el valor del contador es ${cont_double}`);

}