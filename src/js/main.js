function main() {
    //Variables.
    let contador_casillas = 0
    let casillas = []
    let jugador = true
    let var_win = 30000
    let banner_victoria = document.getElementById("banner_victoria")
    var victorias_J1 = 0
    let vicJ1_HTML = document.getElementById("J1VIC")
    var victorias_J2 = 0
    let vicJ2_HTML = document.getElementById("J2VIC")
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
        if (casillas[0].innerHTML === casillas[1].innerHTML && casillas[0].innerHTML === casillas[2].innerHTML && casillas[0].innerHTML != '') {
            var_win = 1;
            animaWin(var_win, jugador);
        } else if (casillas[3].innerHTML === casillas[4].innerHTML && casillas[3].innerHTML === casillas[5].innerHTML && casillas[3].innerHTML != '') {
            var_win = 2;
            animaWin(var_win, jugador);
        } else if (casillas[6].innerHTML === casillas[7].innerHTML && casillas[6].innerHTML === casillas[8].innerHTML && casillas[6].innerHTML != '') {
            var_win = 3;
            animaWin(var_win, jugador);
        } else if (casillas[0].innerHTML === casillas[3].innerHTML && casillas[0].innerHTML === casillas[6].innerHTML && casillas[0].innerHTML != '') {
            var_win = 4;
            animaWin(var_win, jugador);
        } else if (casillas[1].innerHTML === casillas[4].innerHTML && casillas[1].innerHTML === casillas[7].innerHTML && casillas[1].innerHTML != '') {
            var_win = 5;
            animaWin(var_win, jugador);
        } else if (casillas[2].innerHTML === casillas[5].innerHTML && casillas[2].innerHTML === casillas[8].innerHTML && casillas[2].innerHTML != '') {
            var_win = 6;
            animaWin(var_win, jugador);
        } else if (casillas[0].innerHTML === casillas[4].innerHTML && casillas[0].innerHTML === casillas[8].innerHTML && casillas[0].innerHTML != '') {
            var_win = 7;
            animaWin(var_win, jugador);
        } else if (casillas[2].innerHTML === casillas[4].innerHTML && casillas[2].innerHTML === casillas[6].innerHTML && casillas[2].innerHTML != '') {
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
        jugador = !jugador
    }

    function animaWin(var_win, jugador) {
        let estrella_win
        if (jugador) {
            estrella_win = '<img src="../assets/img/star1.svg">';
            texto_victoria = '<svg width="auto"height="100"><circle cx="100"cy="50"r="50"fill="#ffd900"viewBox="0 0 100 100"><animate attributeType="XML"attributeName="cx"from="-1490"to="2320"dur="5s"begin="0s"repeatCount="indefinite"/></circle><text x="10"y="70"style="font:bold 4.2em arial;fill:white;"viewBox="0 0 100 100">J1<animate attributeType="XML"attributeName="x"from="-1525"to="2285"dur="5s"begin="0s"repeatCount="indefinite"/></text><text x="0"y="70"style="font:bold 4.2em arial;fill:black;"viewBox="0 0 100 100">El ganador es<animate attributeType="XML"attributeName="x"from="-2030"to="1800"dur="5s"begin="0s"repeatCount="indefinite"/></text></svg>';
            victorias_J1++
            vicJ1_HTML.innerHTML = victorias_J1
        } else {
            estrella_win = '<img src="../assets/img/star2.svg">';
            texto_victoria = '<svg width="auto"height="100"><circle cx="100"cy="50"r="50"fill="Blue"viewBox="0 0 100 100"><animate attributeType="XML"attributeName="cx"from="-1490"to="2320"dur="5s"begin="0s"repeatCount="indefinite"/></circle><text x="10"y="70"style="font:bold 4.2em arial;fill:white;"viewBox="0 0 100 100">J2<animate attributeType="XML"attributeName="x"from="-1525"to="2285"dur="5s"begin="0s"repeatCount="indefinite"/></text><text x="0"y="70"style="font:bold 4.2em arial;fill:black;"viewBox="0 0 100 100">El ganador es<animate attributeType="XML"attributeName="x"from="-2030"to="1800"dur="5s"begin="0s"repeatCount="indefinite"/></text></svg>';
            victorias_J2++
            vicJ2_HTML.innerHTML = victorias_J2
        }
        switch (var_win) {
            case 1:
                estrellas(estrella_win, 0, 1, 2, texto_victoria);
                break;
            case 2:
                estrellas(estrella_win, 3, 4, 5, texto_victoria);
                break;
            case 3:
                estrellas(estrella_win, 6, 7, 8, texto_victoria);
                break;
            case 4:
                estrellas(estrella_win, 0, 3, 6, texto_victoria);
                break;
            case 5:
                estrellas(estrella_win, 1, 4, 7, texto_victoria);
                break;
            case 6:
                estrellas(estrella_win, 2, 5, 8, texto_victoria);
                break;
            case 7:
                estrellas(estrella_win, 0, 4, 8, texto_victoria);
                break;
            case 8:
                estrellas(estrella_win, 2, 4, 6, texto_victoria);
                break;
        }
    }

    function estrellas(estrella_win, casilla1, casilla2, casilla3, texto_victoria) {
        casillas[casilla1].innerHTML = estrella_win
        casillas[casilla2].innerHTML = estrella_win
        casillas[casilla3].innerHTML = estrella_win
        banner_victoria.innerHTML = texto_victoria
    }
}
main()