//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const todo = require('./todo/todo');
const color = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let task = todo.crear(argv.descripcion);
        //console.log(task);
        break;

    case 'listar':
        let lista = todo.listar();
        console.log(lista);
        for (const task of lista) {
            console.log('==== ::POR HACER:: ===='.green);
            console.log(task.descripcion);
            console.log('Estado :', task.completado ? "Completado".blue : "Pendiente".red);
            console.log('======================='.green);
        }

        break;

    case 'actualizar':
        if (todo.actualizar(argv.descripcion, argv.completado)) {
            console.log('Se actualizo la tarea: ', argv.descripcion);
        } else {
            console.error('Error al actualizar la tarea');
        }
        break;

    default:
        if (todo.eliminar(argv.descripcion)) {
            console.log('Se elimino el elemento: ', argv.descripcion);
        } else {
            console.error('Error al eliminar la tarea');
        }
        break;
}