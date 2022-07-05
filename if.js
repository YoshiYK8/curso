var pi = "Piedra"
var pa = "Papel"
var ti = "Tijera"

function Juego(usuario, computadora){
    if (usuario == computadora){
        console.log("Empate");
    }
    else if (usuario === pi && computadora === pa){
        console.log("CPU gana");
    }
    else if(usuario === pi && computadora === ti){
        console.log("User gana");
    }
    else if(usuario === pa && computadora === pi){
        console.log("User gana");
    }
    else if(usuario === pa && computadora === ti){
        console.log("CPU gana");
    }
    else if(usuario === ti && computadora === pa){
        console.log("User gana");
    }
    else if(usuario === ti && computadora === pi){
        console.log("CPU gana");
    }
    else{
        console.log("ERROR")
    }
}
