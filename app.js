const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear( argv.descripcion );
        console.log(tarea);
        break;

    case 'listar':
        console.log('===============Por Hacer==============='.green);
        console.log(tarea.descripcion);
        console.log('Estado: ',tarea.completado);
        console.log('======================================='.green);
        break;

    case 'actualizar':
        let actualizado = porHacer.actualizar( argv.descripcion, argv.completado );
        console.log( actualizado );
        break;

    case 'borrar':
        let borrado = porHacer.actualizar( argv.descripcion );
        console.log( borrado );
        break;

    default:
        console.log('Comando no es reconocido!');
        break;
}