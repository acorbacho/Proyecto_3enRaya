function crear_tablero(tablero) {
    var tableroAux = tablero
    var mensaje = ''

    for (var i = 0; i < tableroAux.length; i++) {
        for (var j = 0; j < tableroAux[i].length; j++) {
            mensaje = mensaje + tableroAux[i][j] + ' '
            document.getElementById("f" + i + "c" + j).innerHTML = tableroAux[i][j]
        }
        mensaje = mensaje + "\n"
    }
    return mensaje
}