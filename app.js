const {crearTablaArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
console.clear();

console.log(argv);
console.log(argv.b, argv.l, argv.h);

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base] = arg3.split('=')
// const base = 5; 

crearTablaArchivo(argv.b, argv.l, argv.h)
    .then(realizado => console.log(realizado = `Tabla del ${argv.b} creado correctamente`))
    .catch(err => console.log(err));

