// import { base } from "multiplicar";
const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yarg')
require('colors')
console.clear();
crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(archivo.rainbow, 'creado'))
    .catch(err => console.log(err))