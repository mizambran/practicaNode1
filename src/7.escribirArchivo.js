const { error, log } = require('console')
const fs = require('fs')

const textoNuevo = `\n *Nuevos Personajes* \n 4. Thor \n 5. SpiderMan`

// En este caso lo hacemos con el sincrono
fs.appendFile('./personajes.txt', textoNuevo, 'utf-8', (error) => {
    if (error) {
        console.error("Ocurrió un error al escribir el archivo.");
    }
    console.log(`Archivo actualizado 👍`);
    
} )


