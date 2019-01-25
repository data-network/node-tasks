const fs = require('fs');

let listado = [];

const guardaData = () => {
    let datos = JSON.stringify(listado);

    fs.writeFile('db/data.json', datos, err => {
        if (err) {
            throw new Error('Error al guardar el archivo', err);
        }
    })
}

const cargaData = () => {
    try {
        //listado = JSON.parse(fs.readFileSync('db/data.json'));
        listado = require('../db/data.json');
    } catch (error) {
        listado = [];
    }
}

const crear = (descripcion) => {
    cargaData();

    let todo = {
        descripcion,
        completado: false
    };

    listado.push(todo);
    guardaData(todo);

    return todo;
}

const listar = () => {
    cargaData();

    return listado;
}

const actualizar = (descripcion, completado = true) => {
    cargaData();

    let index = listado.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listado[index].completado = completado;
        guardaData();

        return true;
    } else {
        return false;
    }
}

const eliminar = (descripcion) => {
    cargaData();

    let result = listado.filter(tarea => tarea.descripcion != descripcion);

    if (result.length !== listado.length) {
        listado = result;
        guardaData();

        return true;
    } else {
        return false;
    }
}

module.exports = {
    crear,
    listar,
    actualizar,
    eliminar
}