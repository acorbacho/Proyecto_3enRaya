function main() {

  //Variables.
  let contador_casillas = 0
  let casillas = []
  let jugador = true
  let var_win = 30000
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
    if (casillas[0].innerHTML === casillas[1].innerHTML && casillas[0].innerHTML === casillas[2].innerHTML && casillas[0].innerHTML != '') {
      salida('Win1');
      var_win = 1;
      animaWin(var_win, jugador);
    } else if (casillas[3].innerHTML === casillas[4].innerHTML && casillas[3].innerHTML === casillas[5].innerHTML && casillas[3].innerHTML != '') {
      salida('Win2');
      var_win = 2;
      animaWin(var_win, jugador);
    } else if (casillas[6].innerHTML === casillas[7].innerHTML && casillas[6].innerHTML === casillas[8].innerHTML && casillas[6].innerHTML != '') {
      salida('Win3');
      var_win = 3;
      animaWin(var_win, jugador);
    } else if (casillas[0].innerHTML === casillas[3].innerHTML && casillas[0].innerHTML === casillas[6].innerHTML && casillas[0].innerHTML != '') {
      salida('Win4');
      var_win = 4;
      animaWin(var_win, jugador);
    } else if (casillas[1].innerHTML === casillas[4].innerHTML && casillas[1].innerHTML === casillas[7].innerHTML && casillas[1].innerHTML != '') {
      salida('Win5');
      var_win = 5;
      animaWin(var_win, jugador);
    } else if (casillas[2].innerHTML === casillas[5].innerHTML && casillas[2].innerHTML === casillas[8].innerHTML && casillas[2].innerHTML != '') {
      salida('Win6');
      var_win = 6;
      animaWin(var_win, jugador);
    } else if (casillas[0].innerHTML === casillas[4].innerHTML && casillas[0].innerHTML === casillas[8].innerHTML && casillas[0].innerHTML != '') {
      salida('Win7');
      var_win = 7;
      animaWin(var_win, jugador);
    } else if (casillas[2].innerHTML === casillas[4].innerHTML && casillas[2].innerHTML === casillas[6].innerHTML && casillas[2].innerHTML != '') {
      salida('Win8');
      var_win = 8;
      animaWin(var_win, jugador);
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

  function animaWin(var_win, jugador) {
    let estrella_win
    if (jugador) { estrella_win = '<img src="../assets/img/star2.svg">' } else { estrella_win = '<img src="../assets/img/star1.svg">' }
    switch (var_win) {
      case 1:
        estrellas(estrella_win, 0, 1, 2);
        break;
      case 2:
        estrellas(estrella_win, 3, 4, 5);
        break;
      case 3:
        estrellas(estrella_win, 6, 7, 8);
        break;
      case 4:
        estrellas(estrella_win, 0, 3, 6);
        break;
      case 5:
        estrellas(estrella_win, 1, 4, 7);
        break;
      case 6:
        estrellas(estrella_win, 2, 5, 8);
        break;
      case 7:
        estrellas(estrella_win, 0, 4, 8);
        break;
      case 8:
        estrellas(estrella_win, 2, 4, 6);
        break;
    }
  }

  function estrellas(estrella_win, casilla1, casilla2, casilla3) {
    casillas[casilla1].innerHTML = estrella_win
    casillas[casilla2].innerHTML = estrella_win
    casillas[casilla3].innerHTML = estrella_win
  }
}
main()