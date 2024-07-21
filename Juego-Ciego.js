// Computadora
// Primera Pagina
function restaurante_compu() {
    puntaje += 10;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    `<br><br><h4>Correcto</h4><br><br>Después de pasar por el usual restaurante con tu permiso para perros guía, comes y vas en camino a tu trabajo.<br>En el camino debes utilizar un medio de transporte que produce un ruido parecido a una alarma cuando este por llegar. Este transporte es?
    <div id="audio-container_Compu">
        <audio id="audio1_Compu" class="draggable" controls preload>
            <source src="Sonidos/Tren.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Compu" class="draggable" controls preload>
            <source src="Sonidos/Colectivo.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-compu").removeEventListener("click", restaurante_compu)    
    document.getElementById("opc2-ciego-compu").removeEventListener("click", parque_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Un tren"
    document.getElementById("opc1-ciego-compu").addEventListener("click", tren_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Un colectivo"
    document.getElementById("opc2-ciego-compu").addEventListener("click", colectivo_compu)
}

function parque_compu() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    `<br><br><h4>Incorrecto</h4><br><br>Pasas por el parque en vez de comer algo. Despues de tomar un paseo por el parque con tu perro vas<br>en camino a tu trabajo, en el camino debes utilizar un medio de transporte. Este transporte es?
    <div id="audio-container_Compu">
        <audio id="audio1_Compu" class="draggable" controls preload>
            <source src="Sonidos/Tren.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Compu" class="draggable" controls preload>
            <source src="Sonidos/Colectivo.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-compu").removeEventListener("click", restaurante_compu)    
    document.getElementById("opc2-ciego-compu").removeEventListener("click", parque_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Un tren"
    document.getElementById("opc1-ciego-compu").addEventListener("click", tren_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Un colectivo"
    document.getElementById("opc2-ciego-compu").addEventListener("click", colectivo_compu)
}

// Segunda Pagina
function tren_compu() {
    puntaje += 10;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    `<br><br><h4>Correcto</h4><br><br>Te bajastes del tren con tu perro, gracias a pasar multiples veces por aca lograstes llegar facilmente a tu trabajo; haces tu usual trabajo y hoy te dejan irte temprano. Decides salir a pasear a un lugar tranquilo donde se escuchan las abejas, el lugar es?
    <div id="audio-container_Compu">
        <audio id="audio1_Compu" class="draggable" controls preload>
            <source src="Sonidos/Bosque_abejas.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Compu" class="draggable" controls preload>
            <source src="Sonidos/Bosque_cuervos.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-compu").removeEventListener("click", tren_compu)
    document.getElementById("opc2-ciego-compu").removeEventListener("click", colectivo_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Un bosque con abejas"
    document.getElementById("opc1-ciego-compu").addEventListener("click", bosque_abejas_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Un bosque con cuervos"
    document.getElementById("opc2-ciego-compu").addEventListener("click", bosque_cuervos_compu)
}

function colectivo_compu() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    "<br><br><h4>Incorrecto</h4><br><br>Esperas a que el colectivo se pare por tercera vez para bajarte, por no usar el tren debes caminar mas de lo normal.<br>Te pierdes y no sabes donde ir, intenta devuelta."

    document.getElementById("opc1-ciego-compu").removeEventListener("click", tren_compu)
    document.getElementById("opc2-ciego-compu").removeEventListener("click", colectivo_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Reiniciar"
    document.getElementById("opc1-ciego-compu").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Reiniciar"
    document.getElementById("opc2-ciego-compu").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// Tercera Pagina
function bosque_abejas_compu() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    `<br><br><h4>Correcto</h4><br><br>Decides ir a un bosque con abejas, tu perro ya entrenado te ayuda a pasar por las zonas rocosas y terminas tu caminata. Para finalizar el dia decides ir a un lugar donde se puede escuchar operas y las risas de la gente. Mediante los audios dados, cual es el correcto?
    <div id="audio-container_Compu">
        <audio id="audio1_Compu" class="draggable" controls preload>
            <source src="Sonidos/Musical.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Compu" class="draggable" controls preload>
            <source src="Sonidos/Teatro_Aplausos.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-compu").removeEventListener("click", bosque_abejas_compu)
    document.getElementById("opc2-ciego-compu").removeEventListener("click", bosque_cuervos_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Musical"
    document.getElementById("opc1-ciego-compu").addEventListener("click", musical_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Teatro"
    document.getElementById("opc2-ciego-compu").addEventListener("click", teatro_compu)
}

function bosque_cuervos_compu() {
    puntaje += 5;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    `<br><br><h4>Incorrecto</h4><br><br>Terminas llendo a un bosque donde se escucha los cuervos, tu perro ya entrenado te ayuda a pasar por las zonas rocosas y terminas tu caminata. Para finalizar el dia decides ir a un lugar donde se puede escuchar operas y las risas de la gente. Mediante los audios dados, cual es el correcto?
    <div id="audio-container_Compu">
        <audio id="audio1_Compu" class="draggable" controls preload>
            <source src="Sonidos/Musical.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Compu" class="draggable" controls preload>
            <source src="Sonidos/Teatro_Aplausos.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-compu").removeEventListener("click", bosque_abejas_compu)
    document.getElementById("opc2-ciego-compu").removeEventListener("click", bosque_cuervos_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Musical"
    document.getElementById("opc1-ciego-compu").addEventListener("click", musical_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Teatro"
    document.getElementById("opc2-ciego-compu").addEventListener("click", teatro_compu)
}

// Cuarta Pagina
function teatro_compu() {
    puntaje += 5;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    "<br><br><h4>Correcto</h4><br><br>El teatro es la opcion correcta ya que en un teatro lo que reina son las operas. Despues de entretenerte decides volver a casa para relajarte."

    document.getElementById("opc1-ciego-compu").removeEventListener("click", musical_compu)
    document.getElementById("opc2-ciego-compu").removeEventListener("click", teatro_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Volver a casa"
    document.getElementById("opc1-ciego-compu").addEventListener("click", volver_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Volver a casa"
    document.getElementById("opc2-ciego-compu").addEventListener("click", volver_compu)
}

function musical_compu() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-compu").innerHTML =
    "<br><br><h4>Incorrecto</h4><br><br>Un musical no es una mala opcion, pero en un musical lo que reina es la musica mas que la opera. Despues de entretenerte decides volver a casa para relajarte."

    document.getElementById("opc1-ciego-compu").removeEventListener("click", musical_compu)
    document.getElementById("opc2-ciego-compu").removeEventListener("click", teatro_compu)

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Volver a casa"
    document.getElementById("opc1-ciego-compu").addEventListener("click", volver_compu)

    document.getElementById("opc2-ciego-compu").innerHTML =
    "Volver a casa"
    document.getElementById("opc2-ciego-compu").addEventListener("click", volver_compu)
}

// Ultima Pagina
function volver_compu() {
    document.getElementById("puntaje-ciego-compu").innerHTML =
    "Tu puntaje final es: " + puntaje;

    if(puntaje == 30) 
        document.getElementById("texto-ciego-compu").innerHTML =
        "<br><strong>¡Perfecto!</strong><br><br>Obtuviste el puntaje más alto posible.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."
    else if(puntaje >= 10 && puntaje <= 25)
        document.getElementById("texto-ciego-compu").innerHTML =
        "<br><strong>¡Muy Bien!</strong><br><br>Obtuviste un buen puntaje.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."
    else 
        document.getElementById("texto-ciego-compu").innerHTML =
        "<br><strong>¡Mal Puntaje!</strong><br><br>Obtuviste un puntaje bajo.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."

    document.getElementById("opc1-ciego-compu").innerHTML =
    "Reiniciar"
    document.getElementById("opc1-ciego-compu").addEventListener("click", function() {
        window.location.href = "index.html";
    });
        
    document.getElementById("opc2-ciego-compu").innerHTML =
    "Reiniciar"
    document.getElementById("opc2-ciego-compu").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// Celular
// Primera Pagina
function restaurante_celu() {
    puntaje += 10;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    `<br><br><h4>Correcto</h4><br><br>Después de pasar por el usual restaurante con tu permiso para perros guía, comes y vas en camino a tu trabajo.<br>En el camino debes utilizar un medio de transporte que produce un ruido parecido a una alarma cuando este por llegar. Este transporte es?
    <div id="audio-container_Celu">
        <audio id="audio1_Celu" class="draggable" controls preload>
            <source src="Sonidos/Tren.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Celu" class="draggable" controls preload>
            <source src="Sonidos/Colectivo.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-celu").removeEventListener("click", restaurante_celu)    
    document.getElementById("opc2-ciego-celu").removeEventListener("click", parque_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Un tren"
    document.getElementById("opc1-ciego-celu").addEventListener("click", tren_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Un colectivo"
    document.getElementById("opc2-ciego-celu").addEventListener("click", colectivo_celu)
}

function parque_celu() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    `<br><br><h4>Incorrecto</h4><br><br>Pasas por el parque en vez de comer algo. Despues de tomar un paseo por el parque con tu perro vas<br>en camino a tu trabajo, en el camino debes utilizar un medio de transporte. Este transporte es?
    <div id="audio-container_Celu">
        <audio id="audio1_Celu" class="draggable" controls preload>
            <source src="Sonidos/Tren.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Celu" class="draggable" controls preload>
            <source src="Sonidos/Colectivo.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-celu").removeEventListener("click", restaurante_celu)    
    document.getElementById("opc2-ciego-celu").removeEventListener("click", parque_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Un tren"
    document.getElementById("opc1-ciego-celu").addEventListener("click", tren_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Un colectivo"
    document.getElementById("opc2-ciego-celu").addEventListener("click", colectivo_celu)
}

// Segunda Pagina
function tren_celu() {
    puntaje += 10;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    `<br><br><h4>Correcto</h4><br><br>Te bajastes del tren con tu perro, gracias a pasar multiples veces por aca lograstes llegar facilmente a tu trabajo; haces tu usual trabajo y hoy te dejan irte temprano. Decides salir a pasear a un lugar tranquilo donde se escuchan las abejas, el lugar es?
    <div id="audio-container_Celu">
        <audio id="audio1_Celu" class="draggable" controls preload>
            <source src="Sonidos/Bosque_abejas.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Celu" class="draggable" controls preload>
            <source src="Sonidos/Bosque_cuervos.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-celu").removeEventListener("click", tren_celu)
    document.getElementById("opc2-ciego-celu").removeEventListener("click", colectivo_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Un bosque con abejas"
    document.getElementById("opc1-ciego-celu").addEventListener("click", bosque_abejas_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Un bosque con cuervos"
    document.getElementById("opc2-ciego-celu").addEventListener("click", bosque_cuervos_celu)
}

function colectivo_celu() {
    puntaje -= 10;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    "<br><br><h4>Incorrecto</h4><br><br>Esperas a que el colectivo se pare por tercera vez para bajarte, por no usar el tren debes caminar mas de lo normal.<br>Te pierdes y no sabes donde ir, intenta devuelta."

    document.getElementById("opc1-ciego-celu").removeEventListener("click", tren_celu)
    document.getElementById("opc2-ciego-celu").removeEventListener("click", colectivo_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Reiniciar"
    document.getElementById("opc1-ciego-celu").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Reiniciar"
    document.getElementById("opc2-ciego-celu").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}

// Tercera Pagina
function bosque_abejas_celu() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    `<br><br><h4>Correcto</h4><br><br>Decides ir a un bosque con abejas, tu perro ya entrenado te ayuda a pasar por las zonas rocosas y terminas tu caminata. Para finalizar el dia decides ir a un lugar donde se puede escuchar operas y las risas de la gente. Mediante los audios dados, cual es el correcto?
    <div id="audio-container_Celu">
        <audio id="audio1_Celu" class="draggable" controls preload>
            <source src="Sonidos/Musical.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Celu" class="draggable" controls preload>
            <source src="Sonidos/Teatro_Aplausos.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-celu").removeEventListener("click", bosque_abejas_celu)
    document.getElementById("opc2-ciego-celu").removeEventListener("click", bosque_cuervos_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Musical"
    document.getElementById("opc1-ciego-celu").addEventListener("click", musical_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Teatro"
    document.getElementById("opc2-ciego-celu").addEventListener("click", teatro_celu)
}

function bosque_cuervos_celu() {
    puntaje += 5;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    `<br><br><h4>Incorrecto</h4><br><br>Terminas llendo a un bosque donde se escucha los cuervos, tu perro ya entrenado te ayuda a pasar por las zonas rocosas y terminas tu caminata. Para finalizar el dia decides ir a un lugar donde se puede escuchar operas y las risas de la gente. Mediante los audios dados, cual es el correcto?
    <div id="audio-container_Celu">
        <audio id="audio1_Celu" class="draggable" controls preload>
            <source src="Sonidos/Musical.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
        <audio id="audio2_Celu" class="draggable" controls preload>
            <source src="Sonidos/Teatro_Aplausos.mp3" type="audio/mpeg">
            Tu navegador no soporta el elemento de audio.
        </audio>
    </div>`;

    document.getElementById("opc1-ciego-celu").removeEventListener("click", bosque_abejas_celu)
    document.getElementById("opc2-ciego-celu").removeEventListener("click", bosque_cuervos_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Musical"
    document.getElementById("opc1-ciego-celu").addEventListener("click", musical_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Teatro"
    document.getElementById("opc2-ciego-celu").addEventListener("click", teatro_celu)
}

// Cuarta Pagina
function teatro_celu() {
    puntaje += 5;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    "<br><br><h4>Correcto</h4><br><br>El teatro es la opcion correcta ya que en un teatro lo que reina son las operas. Despues de entretenerte decides volver a casa para relajarte."

    document.getElementById("opc1-ciego-celu").removeEventListener("click", musical_celu)
    document.getElementById("opc2-ciego-celu").removeEventListener("click", teatro_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Volver a casa"
    document.getElementById("opc1-ciego-celu").addEventListener("click", volver_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Volver a casa"
    document.getElementById("opc2-ciego-celu").addEventListener("click", volver_celu)
}

function musical_celu() {
    puntaje -= 5;
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje es: " + puntaje;

    document.getElementById("texto-ciego-celu").innerHTML =
    "<br><br><h4>Incorrecto</h4><br><br>Un musical no es una mala opcion, pero en un musical lo que reina es la musica mas que la opera. Despues de entretenerte decides volver a casa para relajarte."

    document.getElementById("opc1-ciego-celu").removeEventListener("click", musical_celu)
    document.getElementById("opc2-ciego-celu").removeEventListener("click", teatro_celu)

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Volver a casa"
    document.getElementById("opc1-ciego-celu").addEventListener("click", volver_celu)

    document.getElementById("opc2-ciego-celu").innerHTML =
    "Volver a casa"
    document.getElementById("opc2-ciego-celu").addEventListener("click", volver_celu)
}

// Ultima Pagina
function volver_celu() {
    document.getElementById("puntaje-ciego-celu").innerHTML =
    "Tu puntaje final es: " + puntaje;

    if(puntaje == 30) 
        document.getElementById("texto-ciego-celu").innerHTML =
        "<br><strong>¡Perfecto!</strong><br><br>Obtuviste el puntaje más alto posible.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."
    else if(puntaje >= 10 && puntaje <= 25)
        document.getElementById("texto-ciego-celu").innerHTML =
        "<br><strong>¡Muy Bien!</strong><br><br>Obtuviste un buen puntaje.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."
    else 
        document.getElementById("texto-ciego-celu").innerHTML =
        "<br><strong>¡Mal Puntaje!</strong><br><br>Obtuviste un puntaje bajo.<br><br>Este juego fue diseñado con el propósito de resaltar la importancia de la inclusión social de las personas ciegas. Busca simular la experiencia de vida de una persona con ceguera, adaptándose a los sonidos del entorno para determinar su ubicación. Sin embargo, más allá de la adaptación individual, este juego enfatiza el papel crucial que juega la sociedad en apoyar a las personas con discapacidades visuales en su orientación diaria. Aunque cuenten con herramientas como un bastón y un perro guía, su percepción del mundo se basa principalmente en el oído. Por lo tanto, es responsabilidad de todos facilitar su integración y participación en la sociedad, reafirmando que la inclusión social de las personas ciegas es un compromiso colectivo.<br><br>Muchas gracias por jugar este juego."

    document.getElementById("opc1-ciego-celu").innerHTML =
    "Reiniciar"
    document.getElementById("opc1-ciego-celu").addEventListener("click", function() {
        window.location.href = "index.html";
    });
        
    document.getElementById("opc2-ciego-celu").innerHTML =
    "Reiniciar"
    document.getElementById("opc2-ciego-celu").addEventListener("click", function() {
        window.location.href = "index.html";
    });
}