    var nombres = ["Yoshio","Daniel","Aaron","Abraham","Deca","Armando","Joshua"];

    function saludos(nombres){
        console.log(`Hola ${nombres}`);
}
    for(var x = 0; x<nombres.length; x++){
        saludos(nombres[x]);
    }
    //alternativa
    //for(var nombre of nombres){
        //saludos(nombre);
    //}
//for - recorre un bloque de código varias veces

//for/in - recorre las propiedades de un objeto

//for/of - recorre los valores de un objeto iterable

//while - recorre un bloque de código mientras se cumple una condición específica

//do/while - también recorre un bloque de código mientras se cumple una condición específica