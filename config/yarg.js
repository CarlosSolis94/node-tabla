//USO DEL PAQUETE YARGS
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Maximo por el cual se multiplicara la base',
        demandOption: true
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) 
        { throw 'la base tiene que ser un número' }
        if (isNaN(argv.h)) {
            throw 'El limite tiene que ser un numero'
        }
        return true;
    })
    .argv;

    //exportar
module.exports = argv;