const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Ayuda del parametro descripcion'
}

const completado = {
    alias: 'c',
    default: true,
    desc: 'Ayuda del parametro completado'
}

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualiza el estado completado de una tarea', { descripcion, completado })
    .command('eliminar', 'Elimina un elemento por hacer', { descripcion })
    .help()
    .argv

module.exports = {
    argv
}