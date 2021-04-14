const cantidad = Number(prompt( 'ingrese la cantidad total de numeros a leer '));
let numero=[];
let mayor=0;

for ( let i=0; i<cantidad; i++ ){
    numero[i] = Number(prompt('ingrese un numero'))
}

mayor= numero[0];

for ( let i=1; i< cantidad; i++ ){
    if ( mayor < numero[i]){
        mayor = numero[i]
    }
}

console.log( 'el mayor es: ', mayor )