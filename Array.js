var frutas = ["Manzana", "Berengena","Platano","Durazno"];
console.log(frutas.length); //Longitud u objetos que contiene el array

var masFrutas = frutas.push("Uva"); //Agrega un objeto al array frutas
var menosFrutas = frutas.pop("Uva");//Quita un objeto del array frutas
var masFrutasV2 = frutas.unshift("Uva");//Agrega un objeto al array frutas pero al principio del array posicion 0
var menosFrutasV2 = frutas.shift("Uva");//Quita un objeto del array frutas pero al principio del array posicion 0
var encontrarFrutas = frutas.indexOf("Platano");//Busca la posicion en el array frutas en este caso es 2
