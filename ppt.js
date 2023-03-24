const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");
const parrafos = document.querySelector("#parrafos");
const mensajesFinales = document.querySelector("#mensajesFinales");

function elegirBoton() {
    const botones = [piedra, papel, tijera];
    let aleatorio = Math.floor(Math.random() * 3);
    return botones[aleatorio]
}


let crearMensaje = (mensaje) => {
    let parrafo = document.createElement("p");
    parrafo.textContent = mensaje;
    parrafos.appendChild(parrafo)
}

let jugador;
let pc = elegirBoton();
let puntosJugador = 0;
let puntosPc = 0;

const duelo = () => {
    if (jugador == piedra && pc == tijera) {
        puntosJugador++;
        crearMensaje(`Jugador elige PIEDRA, Pc elige TIJERA`);
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    } else if (pc == piedra && jugador == tijera) {
        puntosPc++;
        crearMensaje("Jugador elige TIJERA, Pc elige PIEDRA");
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    } else if (jugador == papel && pc == piedra) {
        puntosJugador++;
        crearMensaje("Jugador elige PAPEL, Pc elige PIEDRA");
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    } else if (pc == papel && jugador == piedra) {
        puntosPc++;
        crearMensaje("Jugador elige PIEDRA, pc ELIGE PAPEL");
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    } else if (jugador == tijera && pc == papel) {
        puntosJugador++;
        crearMensaje("Jugador elige TIJERA, Pc elige PAPEL");
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    } else if (pc == tijera && jugador == papel) {
        puntosPc++;
        crearMensaje("Jugador elige PAPEL, Pc elige TIJERA");
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    } else {
        crearMensaje("EMPATE");
        crearMensaje(`Puntos del Jugador: ${puntosJugador} - Puntos de la Pc: ${puntosPc}`);
    }
}

function preguntar() {
    if (puntosJugador == 3 || puntosPc == 3) {
        piedra.disabled = true;
        papel.disabled = true;
        tijera.disabled = true;
        let si = document.createElement("input");
        si.type = "submit";
        si.value = "si";
        mensajesFinales.appendChild(si);
        si.addEventListener("click", () => {
            window.location.reload();
        })
        let no = document.createElement("input");
        no.type = "submit";
        no.value = "no";
        mensajesFinales.appendChild(no);
        no.addEventListener("click", () => {
            crearMensaje("hasta luego compa");
            si.disabled = true;
            no.disabled = true;
        })
    }
}

let juego = () => {
    piedra.addEventListener("click", () => {
        jugador = piedra;
        pc = elegirBoton();
        duelo();
        preguntar();
    })
    papel.addEventListener("click", () => {
        jugador = papel;
        pc = elegirBoton();
        duelo();
        preguntar();
    })
    tijera.addEventListener("click", () => {
        jugador = tijera;
        pc = elegirBoton();
        duelo();
        preguntar();
    })
}

juego();

