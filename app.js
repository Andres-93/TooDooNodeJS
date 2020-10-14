
//const argv = require('yargs').argv;

const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./tooDooLog/porHacer');

const crearTarea = require('./tooDooLog/porHacer');

let comando = argv._[0];

switch(comando){

    case 'crear':
        let tarea = crearTarea.crear(argv.descripcion);
        break;
    
    case 'listar':
        
        let lista = crearTarea.getLista();

        for(let tarea of lista){

            console.log('=================='.green);
            console.log(tarea.descripcion);
            console.log('Estado = ' + tarea.completado);
            console.log('=================='.green);
        }

        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion,argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('comando no reconocido');



}