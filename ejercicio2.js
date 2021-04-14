let numero = [];

for ( let i=0; i<3; i++){

    numero[i] =  Number( prompt('ingrese un numero'));
    
}
mayor = numero[0];

for ( let i=0; i<3; i++){
    if( mayor < numero[i]){
        mayor = numero[i];
    }
}

console.log( 'el mayor es', mayor)