const yargs = require("yargs");


const descripcion = {
        alias: 'd',
        demand: true,
        desc: 'Descripción de la tarea por hacer'
    }

const completado =  {
        alias: 'c',
        default: true,
        desc: 'Marca como completado o pendiente la tarea'
    }


const argv = require(yargs)
    .comand('crear','Crear una tarea por hacer', {
        descripcion
    })
    .comand('actualizar','Actualiza una tarea por hacer', {
        descripcion,
        completado
    } )
    .comand('borrar','Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}