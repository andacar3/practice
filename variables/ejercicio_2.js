const button = document.querySelector('#myBtn');

button.onclick = function() {

    const precio = prompt("ingrese el precio");
    const disCnt = prompt("ingrese un descuento");

    const finalPrice =  precio - (precio * (disCnt/100));

    alert(`el precio final del producto es ${finalPrice}`);


}