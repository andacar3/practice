const button = document.querySelector('#myBtn');

button.onclick = function() {

    const precio = parseFloat(prompt("ingrese el precio"));
    const disCnt = parseFloat(prompt("ingrese un descuento"));

    const finalPrice =  precio - (precio * (disCnt/100));

    alert(`el precio final del producto es ${finalPrice}`);


}