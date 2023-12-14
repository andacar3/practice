const button = document.querySelector('#myBtn')
let cont_sum = 0;
 
button.onclick =function(){
for (let i = 1; i <= 100 ; i++) {
 cont_sum = cont_sum + i;
    
}

alert(`la suma de los 100 primeros numeros es es ${cont_sum}`);

}