/* 
creamos un programa que genere un numero aleatorio entre dos numeros, si no
me pasan los parametros se va a crear un numero entre 1 y 100
*/

// objeto process.argv;

const argumentos = process.argv
console.log(argumentos);
// Me devuelve un array con la posición [0] = donde se esta ejecutando , [1] la ubicación del archivo

const args = argumentos.slice(2)  // para que recorte el array y me traiga solo lo que puse en la terminal

console.log(args);

let min = 1;
let max = 100

if(args.length === 2){
    // pasar los datos de ingresa el usuario a number entero 
    const minParse = parseInt(args[0])
    const maxParse = parseInt(args[1])

    // validación que no sean String y que el minimo sea menor que el maximo
    if( !isNaN(minParse) && !isNaN(maxParse) && minParse < maxParse){
        
        //guardamos las validaciones dentro de las variables que ya habiamos declarado
        min = minParse;
        max = maxParse
    } else {
        console.log("Rango invalido, usaremos los valores por defecto (1, 100)");
    }
}

const aleatorio = Math.floor(Math.random() * (max - min + 1)) - min
console.log(`El número aleatorio entre ${min} y ${max} es : ${aleatorio}`);

