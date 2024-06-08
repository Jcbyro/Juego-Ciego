function cafeteria() {
    puntaje += 10;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    "Despues de pasar por la usual cafeteria con permiso para perros guia vas llendo a tu trabajo. Despues de tomar tu usual cafe vas en camino a tu trabajo, en el camino debes utilizar un medio de transporte, este transporte produce vibraciones cuando este por llegar y se escucha la llegada del transporte por los altavoces. Cual es este medio de transporte?"

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
    "Pasar por un parque no es una mala opcion ya que el tranquilo viento te ayuda a relajarte, pero no te ayuda a despertarte tanto que como un buen cafe a la mañana. Despues de tomar un paseo por el parque con tu perro vas en camino a tu trabajo, en el camino debes utilizar un medio de transporte, este transporte produce vibraciones cuando este por llegar y se escucha la llegada del transporte por los altavoces. Cual es este medio de transporte?"

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
    "Te bajastes del tren con tu perro, y lograstes llegar a tu trabajo; haces tu usual trabajo y hoy te dejan irte temprano. Decides salir a pasear antes de volver, "

    document.getElementById("opc1-ciego").removeEventListener("click", tren)
    document.getElementById("opc2-ciego").removeEventListener("click", colectivo)

    document.getElementById("opc1-ciego").innerHTML =
    ""
    document.getElementById("opc1-ciego").addEventListener("click", )

    document.getElementById("opc2-ciego").innerHTML =
    ""
    document.getElementById("opc2-ciego").addEventListener("click", )
}

function colectivo() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego").innerHTML =
    ""

    document.getElementById("opc1-ciego").removeEventListener("click", tren)
    document.getElementById("opc2-ciego").removeEventListener("click", colectivo)

    document.getElementById("opc1-ciego").innerHTML =
    ""
    document.getElementById("opc1-ciego").addEventListener("click", )

    document.getElementById("opc2-ciego").innerHTML =
    ""
    document.getElementById("opc2-ciego").addEventListener("click", )
}


















function volver_casa() {
    document.getElementById("puntaje-ciego").innerHTML =
    "Tu puntaje es: " + puntaje;

    if(puntaje == 10) 
        document.getElementById("texto-ciego").innerHTML =
        "<strong>¡Perfecto!</strong><br>Obtuviste el puntaje más alto posible.<br>Has tomado las decisiones correctas en las situaciones que se plantearon. El objetivo de esta actividad es de mostrar las dificultades del día a día de una persona ciega que pueden pasar desapercibidas para muchas personas.<br>Esto es solo una mínima porción de la realidad a la que se enfrentan.<br>Qué pasaría si no hay otra opción mas que caminar hasta el parque o no es posible pedir un taxi o un amigo?<br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos.<br><br>Muchas gracias."
    else if(puntaje == 5)
        document.getElementById("texto-ciego").innerHTML =
        "<strong>¡Muy Bien!</strong><br>Obtuviste un buen puntaje.<br>Esperamos que este juego te haya ayudado a apreciar los desafíos que existen, pero quizás se nos pasan por alto. El objetivo de esta actividad es de mostrar las dificultades del día a día ciega de ruedas que pueden pasar desapercibidas para muchas personas.<br>Esto es solo una mínima porción de la realidad a la que se enfrentan.<br>Qué pasaría si no hay otra opción mas que caminar hasta el parque o no es posible pedir un taxi o un amigo?<br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos.<br><br>Muchas gracias."
    else 
        document.getElementById("texto-ciego").innerHTML =
        "Esperamos que este juego te haya ayudado a apreciar los desafíos que existen, pero quizás se nos pasan por alto. El objetivo de esta actividad es de mostrar las dificultades del día a día ciega de ruedas que pueden pasar desapercibidas para muchas personas.<br>Esto es solo una mínima porción de la realidad a la que se enfrentan.<br>Qué pasaría si no hay otra opción mas que caminar hasta el parque o no es posible pedir un taxi o un amigo?<br><br>Estas con cuestiones que como sociedad deberíamos considerarlas para actuar en consecuencia y asegurar que todo, desde transporte, calles, accesos a lugares sean accesibles para todos.<br><br>Muchas gracias."

    document.getElementById("opc1-ciego").innerHTML =
    "Volver a Home"
    document.getElementById("opc1-ciego").addEventListener("click", function() {
        window.location.href = "Index.html";
    });
    
    document.getElementById("opc2-ciego").innerHTML =
    "Volver a Juegos"
    document.getElementById("opc2-ciego").addEventListener("click", function() {
        window.location.href = "Juegos.html";
    });
}