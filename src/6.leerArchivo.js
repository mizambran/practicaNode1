// Esta practica esta con comonjs
const fs = require('fs')

// lo hacemos asincrono primero la ubicacion del archivo y luego la codificacion
try {
    const data = fs.readFileSync('./personajes.txt', 'utf-8')
    console.log(data);
    
} catch (error) {
    console.log(`Ocurrió un error al leer el archivo de forma asincrona: \n ${error}`);  
}

