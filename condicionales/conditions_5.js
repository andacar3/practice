const button = document.querySelector('#myBtn');


button.onclick = function () {

    const grade = parseInt(prompt("ingrese su calificacion"))


    if (grade < 6) {
        alert("su calificacion es insuficiente");
    }
    else {
        if (grade < 8) {
            alert("su calificacion es suficiente");
        }
        else {
            if (grade == 8) {
                alert("su calificacion es bien")
            }
            else {
                if (grade < 11) {
                    alert("su calificacion es excelente")
                }
                else {
                    alert(`el numero ${grade} no es una calificacion valida`)
                }
            }
        }
    }

}