function cafeteria() {
    puntaje += 10;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Correcto<br><br>Despues de pasar por la usual cafeteria con tu permiso para perros guia, tomas tu usual cafe y vas en camino a tu trabajo, en el camino debes utilizar un medio de transporte, este transporte produce vibraciones cuando este por llegar y se escucha la llegada del transporte por los altavoces. Cual es este medio de transporte?"

    document.getElementById("opc1-ciego").removeEventListener("click", cafeteria)    
    document.getElementById("opc2-ciego").removeEventListener("click", parque)

    document.getElementById("opc1-ciego").innerHTML =
    "Un tren"
    document.getElementById("opc1-ciego").addEventListener("click", tren)

    document.getElementById("opc2-ciego").innerHTML =
    "Un colectivo"
    document.getElementById("opc2-ciego").addEventListener("click", colectivo)
}

function parque() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Incorrecto<br><br>Pasar por el parque en bez de tomar un cafe. Despues de tomar un paseo por el parque con tu perro vas en camino a tu trabajo, en el camino debes utilizar un medio de transporte, este transporte produce vibraciones cuando este por llegar y se escucha la llegada del transporte por los altavoces. Cual es este medio de transporte?"

    document.getElementById("opc1-ciego").removeEventListener("click", cafeteria)    
    document.getElementById("opc2-ciego").removeEventListener("click", parque)

    document.getElementById("opc1-ciego").innerHTML =
    "Un tren"
    document.getElementById("opc1-ciego").addEventListener("click", tren)

    document.getElementById("opc2-ciego").innerHTML =
    "Un colectivo"
    document.getElementById("opc2-ciego").addEventListener("click", colectivo)
}

function tren() {
    puntaje += 10;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Correcto<br><br>Te bajastes del tren con tu perro, gracias a pasar multiples veces por aca lograstes llegar facilmente a tu trabajo; haces tu usual trabajo y hoy te dejan irte temprano. Decides salir a pasear antes de volver, en este lugar se siente un aire tranquilo, huele a arboles y gente pasa a menudo. Este lugar es?"

    document.getElementById("opc1-ciego").removeEventListener("click", tren)
    document.getElementById("opc2-ciego").removeEventListener("click", colectivo)

    document.getElementById("opc1-ciego").innerHTML =
    "Un bosque"
    document.getElementById("opc1-ciego").addEventListener("click", bosque)

    document.getElementById("opc2-ciego").innerHTML =
    "Un parque"
    document.getElementById("opc2-ciego").addEventListener("click", parque_1)
}

function colectivo() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Incorrecto<br><br>Esperas a que el colectivo se pare por tercera vez para bajarte, por no usar el tren debes caminar mas de lo normal.<br>Podemos continuar, pero no es la tematica del juego, intenta devuelta."

    document.getElementById("opc1-ciego").removeEventListener("click", tren)
    document.getElementById("opc2-ciego").removeEventListener("click", colectivo)

    document.getElementById("opc1-ciego").innerHTML =
    "Reiniciar"
    document.getElementById("opc1-ciego").addEventListener("click", function() {
        window.location.href = "index.html";
    });
    
    document.getElementById("opc2-ciego").innerHTML =
    "Reiniciar"
    document.getElementById("opc2-ciego").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

function parque_1() {
    puntaje += 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Correcto<br><br>Decides ir a un parque, el aire refrescante te ayuda a disfrutar del paseo y gracias a que el parque esta padimentado, las chances de que caigas disminuyen; para finalizar el dia decides ir a un lugar de entretenimiento, en este lugar se puede escuchar las actuaciones que ocurren y los murmullos de la audiencia, este lugar es un:"

    document.getElementById("opc1-ciego").removeEventListener("click", bosque)
    document.getElementById("opc2-ciego").removeEventListener("click", parque_1)

    document.getElementById("opc1-ciego").innerHTML =
    "Musical"
    document.getElementById("opc1-ciego").addEventListener("click", musical)

    document.getElementById("opc2-ciego").innerHTML =
    "Teatro"
    document.getElementById("opc2-ciego").addEventListener("click", teatro)
}

function bosque() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Incorrecto<br><br>Decides ir a un bosque, el aire refrescante te ayuda a disfrutar del paseo, pero las chances de que caigas aumentan en la presencia de ramas o troncos en el piso; para finalizar el dia decides ir a un lugar de entretenimiento, en este lugar se puede escuchar las actuaciones que ocurren y los murmullos de la audiencia, este lugar es un:"

    document.getElementById("opc1-ciego").removeEventListener("click", bosque)
    document.getElementById("opc2-ciego").removeEventListener("click", parque_1)

    document.getElementById("opc1-ciego").innerHTML =
    "Musical"
    document.getElementById("opc1-ciego").addEventListener("click", musical)

    document.getElementById("opc2-ciego").innerHTML =
    "Teatro"
    document.getElementById("opc2-ciego").addEventListener("click", teatro)
}

function teatro() {
    puntaje += 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Correcto<br><br>El teatro es la opcion correcta ya que en un teatro lo que reina son las actuaciones. Despues de entretenerte decides volver a casa para relajarte."

    document.getElementById("opc1-ciego").removeEventListener("click", musical)
    document.getElementById("opc2-ciego").removeEventListener("click", teatro)

    document.getElementById("opc1-ciego").innerHTML =
    "Volver a casa"
    document.getElementById("opc1-ciego").addEventListener("click", volver)

    document.getElementById("opc2-ciego").innerHTML =
    "Volver a casa"
    document.getElementById("opc2-ciego").addEventListener("click", volver)
}

function musical() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "<br>Incorrecto<br><br>Un musical no es una mala opcion, pero en un musical lo que reina es la musica mas que la actuacion. Despues de entretenerte decides volver a casa para relajarte."

    document.getElementById("opc1-ciego").removeEventListener("click", musical)
    document.getElementById("opc2-ciego").removeEventListener("click", teatro)

    document.getElementById("opc1-ciego").innerHTML =
    "Volver a casa"
    document.getElementById("opc1-ciego").addEventListener("click", volver)

    document.getElementById("opc2-ciego").innerHTML =
    "Volver a casa"
    document.getElementById("opc2-ciego").addEventListener("click", volver)
}

function volver() {
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje final es: " + puntaje;

    if(puntaje == 30) 
        document.getElementById("texto-ciego").innerHTML =
        "<br><strong>¡Perfecto!</strong><br><br>Obtuviste el puntaje más alto posible.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."
    else if(puntaje >= 10 && puntaje <= 25)
        document.getElementById("texto-ciego").innerHTML =
        "<br><strong>¡Muy Bien!</strong><br><br>Obtuviste un buen puntaje.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."
    else 
        document.getElementById("texto-ciego").innerHTML =
        "<br><strong>¡Mal Puntuaje!</strong><br><br>Obtuviste un puntuaje bajo.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."

    document.getElementById("opc1-ciego").innerHTML =
    "Reiniciar"
    document.getElementById("opc1-ciego").addEventListener("click", function() {
        window.location.href = "index.html";
    });
        
    document.getElementById("opc2-ciego").innerHTML =
    "Reiniciar"
    document.getElementById("opc2-ciego").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}