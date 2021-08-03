const fs = require('fs')
require('colors')

const crearArchivo = async( base=5, listar = false,hasta = 1 ) =>{

    try{
       
        let salida = ''

        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${base*index}\n`;
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida)

        if(listar){
            console.log("==========");
            console.log(`Tabla del ${base}`.green);
            console.log("==========");
            console.log(salida);
        }

        return `tabla-${base}.txt`

    }catch(error){
        throw error
    }
    
}

module.exports = {
    crearArchivo
}