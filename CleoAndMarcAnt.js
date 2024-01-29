//Cleopatra y Marco Antonio
function pareja (Mujer,Marido){
    Mujer.conyuge=Marido;
    Marido.conyuge=Mujer;
   
    return{
        egipcia:Mujer,
        romano:Marido,
    };
}

let alianza=pareja({name:' Cleopatra'},{name: ' Marco Antonio'});
 console.log('esposo de Cleopatra = ' + alianza.egipcia.conyuge.name);
 console.log("esposa de Marco Antonio = " + alianza.romano.conyuge.name);

 console.log('Uyen a egipto por persecucion politica y tras una posible condena...')

delete alianza.egipcia;
console.log("suicidio por picadura de serpiente " );
console.log(alianza.egipcia)

delete alianza.romano;
console.log("se quita la vida por la muerte de Cleopatra " );
console.log(alianza.romano)