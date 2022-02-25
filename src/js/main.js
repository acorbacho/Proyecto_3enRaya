function main() {
    var isRunning = true
    var continuar = ''
    var tablero = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3']]
    var tablero_mensaje = crear_tablero(tablero)
    var posicion = ''
    var x_o = ''
    var contador = 0
    salida('Bienvenido al 3 en raya.')

    while (isRunning == true) {
        x_o = entrada('Introduce la marca "x" o "o" que deseas introducir.')
        contador = 0

        if (x_o != 'o' && x_o != 'x') {
            salida('Marca no válida')
        } else {
            posicion = entrada('Introduce el número del tablero donde quieres poner la marca.\n' + tablero_mensaje)

            for (var i = 0; i < tablero.length; i++) {

                for (var j = 0; j < tablero[i].length; j++) {

                    if (tablero[i][j] == posicion) {
                        tablero[i][j] = x_o
                        contador++
                    }
                }
            }
            contador++
        }

        if (contador == 0) {
            continuar = entrada('¿Continuar?\n Pulse "Aceptar" para continuar.\n Escriba "no" y pulse "Aceptar" para salir.')
        } else if (contador == 1) {
            salida('Posición no válida.')
            continuar = entrada('¿Continuar?\n Pulse "Aceptar" para continuar.\n Escriba "no" y pulse "Aceptar" para salir.')
        } else if (contador == 2) {
            tablero_mensaje = crear_tablero(tablero)
            salida(tablero_mensaje)
            continuar = entrada('¿Continuar?\n Pulse "Aceptar" para continuar.\n Escriba "no" y pulse "Aceptar" para salir.')
        }

        if (continuar == 'no' || continuar == 'No' || continuar == 'NO' || continuar == 'N' || continuar == 'n') {
            isRunning = !isRunning
        } else {
            isRunning = isRunning
        }
    }
}
main()