var n_cajas = 4;

function celsiusToFarenheit(tempCelsius) {
    return Math.round(tempCelsius * (9 / 5) + 32);
}

function farenheitToCelsius(tempFarenheit) {
    return Math.round((tempFarenheit - 32) * (5 / 9));
}

function onChangeOpt(x) {
    var actualValue = x.selectedIndex;
    //console.log(actualValue)

    for (var i = 1; i <= n_cajas; i++) {
        var maxTempId = "max_caja" + i;
        var minTempId = "min_caja" + i;
        var maxTemp = document.getElementById(maxTempId).innerText;
        var minTemp = document.getElementById(minTempId).innerText;
        if (actualValue === 0) {
            /* Muestrame las cosas en celsius */    
            document.getElementById(maxTempId).innerText = farenheitToCelsius(maxTemp)
            document.getElementById(minTempId).innerText = farenheitToCelsius(minTemp)
        } else {
            /* Muestra las cosas En farenheit */
            document.getElementById(maxTempId).innerText = celsiusToFarenheit(maxTemp);
            document.getElementById(minTempId).innerText = celsiusToFarenheit(minTemp);
        }
    }
}


function alerta(elementoA){
    var ciudad= elementoA.innerText;
    alert("Cargando informe meteorologico "+ ciudad);
}


function aceptar() {
    var cookie= document.querySelector('.cookie');
    cookie.remove();
}