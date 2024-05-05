


function VaLidarNumber(numero){
        if (isNaN(numero)  || numero < 0) {
            alert("Debes ingresar un número entero no negativo")
            return false
        }
        return true
}

function GeneralNumberAlEoRio () {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value)

    if (!VaLidarNumber(min)  || ! VaLidarNumber(max) || min > max) {
        alert("El valor minimo debe ser menor o igual al valor máximo");
        return;
    }

    const numeroAleatorio = Math.floor(min + Math.random() * (max - min + 1));

    const  resultado = `Voce ganho numero: ${numeroAleatorio}`;
    document.getElementById("resultado").innerHTML = resultado;
    
}

