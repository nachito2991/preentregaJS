function compra () {


let entrada    = prompt("Seleccionar el/los instrumentos deseados, al finalizar ingrese LISTO ");
let instrumentos = '';
while (entrada != 'LISTO') {
    instrumentos += entrada +"\n";
    entrada     = prompt("Seleccione otro instrumento");
};

alert (instrumentos);

}

 
