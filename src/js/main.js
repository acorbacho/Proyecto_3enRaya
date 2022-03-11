function main() {

  //Variables.
  let contador_casillas = 0
  let casillas = []
  let jugador = true
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      casillas[contador_casillas] = document.getElementById("f" + i + "c" + j)
      contador_casillas++
    }
  }

  //Eventos.
  for (let i = 0; i < 9; i++) {
    casillas[i].addEventListener('click', () => {
      movimiento(casillas[i])
    })
  }

  //Funciones.
  function movimiento(casilla) {
    if (jugador) {
      casilla.innerHTML = '<img src="../assets/img/nature_space_sun.svg">'
    } else {
      casilla.innerHTML = '<img src="../assets/img/nature_space_moon.svg">'
    }
    jugador = !jugador
    if (casillas[0].innerHTML === casillas[1].innerHTML && casillas[0].innerHTML === casillas[2].innerHTML && casillas[0].innerHTML != null) {
      salida('Win1')
    } else if (casillas[3].innerHTML === casillas[4].innerHTML && casillas[3].innerHTML === casillas[5].innerHTML && casillas[3].innerHTML != '') {
      salida('Win2')
    } else if (casillas[6].innerHTML === casillas[7].innerHTML && casillas[6].innerHTML === casillas[8].innerHTML && casillas[6].innerHTML != '') {
      salida('Win3')
    } else if (casillas[0].innerHTML === casillas[3].innerHTML && casillas[0].innerHTML === casillas[6].innerHTML && casillas[0].innerHTML != '') {
      salida('Win4')
    } else if (casillas[1].innerHTML === casillas[4].innerHTML && casillas[1].innerHTML === casillas[7].innerHTML && casillas[1].innerHTML != '') {
      salida('Win5')
    } else if (casillas[2].innerHTML === casillas[5].innerHTML && casillas[2].innerHTML === casillas[8].innerHTML && casillas[2].innerHTML != '') {
      salida('Win6')
    } else if (casillas[0].innerHTML === casillas[4].innerHTML && casillas[0].innerHTML === casillas[8].innerHTML && casillas[0].innerHTML != '') {
      salida('Win7')
    } else if (casillas[2].innerHTML === casillas[4].innerHTML && casillas[2].innerHTML === casillas[6].innerHTML && casillas[2].innerHTML != '') {
      salida('Win8')
    } else {
      contador_casillas = 0
      for (let i = 0; i < casillas.length; i++) {
        if (casillas[i].innerHTML != '') {
          contador_casillas++
        }
      }
      if (contador_casillas === 9) {
        salida('Empate')
        location.reload()
      }
    }
  }
}
main()