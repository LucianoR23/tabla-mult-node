const fileSystem = require('fs');
const colors = require('colors');


const crearTablaArchivo = async(base, listar, hasta) => {
    let salida = '';
    let consola = '';

    for(let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`
        consola += `${base} ${'x'.red} ${i} ${'='.red} ${base * i}\n`
    }

    if(listar){
        console.log('---------------------------'.america);
        console.log('       Tabla del'.underline.green, colors.blue(base));
        console.log('---------------------------'.america);

        console.log(consola);
    }

    fileSystem.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`

}

module.exports = {
    crearTablaArchivo
}