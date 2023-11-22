const button = document.querySelector('#myBtn');

const dollar = 1.33250;

button.onclick = function() {

    const euros = prompt("ingrese la cantidad de euros");

    const Convert =  euros * dollar;

    alert(`su valor es equivalente a ${Convert} dolares`);


}