var Auto ={
    marca: "Ford",
    modelo: "Scort",
    year: 1999,
    detalles: function(){
        console.log(`Auto ${this.modelo} ${this.year}`);//this hace referencia al objeto Auto
    }

};
Auto.detalles(); //() porque es function, "Auto Ford 1999"
Auto.marca; //"Ford"
Auto.modelo;//"Scort"
Auto.year;//"1999"

function AutoV2(marca,modelo,year){
    this.marca;
    this.modelo;
    this.year;
}
var autoNuevo = new AutoV2("Tesla","Model S",2019); //con new se agrega un objeto en relacion a el function AutoV2

//Problema
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
  }
  var autos = [];
  for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto"); //prompt es Input
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
  }
  
  for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]); //console es Output
  }
