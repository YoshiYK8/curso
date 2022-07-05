//Ahorra memoria este metodo

function Juego (usuario,computadora){
    var pi = "Piedra"
    var pa = "Papel"
    var ti = "Tijera"
    switch(true){

        case usuario === computadora:
            console.log("EMPATE");
            break;
        case usuario === pi && computadora === pa:
            console.log("CPU gana");
            break;
        case usuario === pi && computadora === ti:
            console.log("User gana");
            break;
        case usuario === pa && computadora === pi:
            console.log("User gana");
            break;
        case usuario === pa && computadora === ti:
            console.log("CPU gana");
            break;
        case usuario === ti && computadora === pa:
            console.log("User gana");
            break;
        case usuario === ti && computadora === pi:
            console.log("CPU gana");
            break;
    }

}