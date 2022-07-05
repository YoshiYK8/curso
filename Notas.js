//declarar variables
var letra = "A"
var numero = 1
var array = [1,2,3,4,5]
var booleano = false

//funciones

//funcion declarativa
 function funcion(){
    return 3; 
 }

 function saludo(nombre){
    console.log(`Hola ${nombre}`);
 }
 
 //funcion expresiva
 var funcion = function(){ //funcion dentro de funcion
    return numero+letra;
 }
 funcion();

 