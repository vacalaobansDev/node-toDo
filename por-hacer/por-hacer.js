const fs = requere('fs');
const colors = require('colors');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify( listadoPorHacer );
        
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error ('No se pudo guardar la inforamción.', err );
    });

    
}

const cargarDB = () => {
    try {
        listadoPorHacer = require( '../db/data.json' );
    } catch (error) {
        let listadoPorHacer = [];
    }
    console.log( listadoPorHacer );
}

const crear = ( descripcion ) => {
    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push( porHacer );

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = ( descripcion, completado = true ) => {
    cargarDB();

    let index = listadoPorHacer.findIndex( (tarea) => {
        return tarea.descripcion === descripcion;
    });

    if ( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = ( descripcion ) => {
    cargarDB();

    let index = listadoPorHacer.indexOf( ( tarea ) => {
        return tarea.descripcion === descripcion
    });

    if ( index >= 0) {
        listadoPorHacer.splice(index, 1);
        return true
    }else{
        return false;
    }
}



module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}