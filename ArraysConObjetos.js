var Productos = [
    {nombre: "dildo",precio:1500},
    {nombre: "dedo humano",precio:1500000},
    {nombre: "digimon",precio:150},
    {nombre: "perro",precio:3000}, //adopten
    {nombre: "gato",precio:3000},
    {nombre: "tu mama",precio:10},
    {nombre: "un peso",precio:1}

];
var Filtro = Productos.filter(function(Producto){
    return Producto.precio < 2000;
})
Filtro //"Dildo, digimon, tu mama, un peso"