const button = document.querySelector('#myBtn')


button.onclick =function(){
let cont = 50;

while (cont > 40) {
cont = cont - 1;
    
}

alert(`el valor del contador es ${cont}`);

}