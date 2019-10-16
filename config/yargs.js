const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

let otpsD = {
    descripcion
}

let otpsA = {
    descripcion,
    completado
}

let otpsB = {
    descripcion
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', otpsD)
    .command('actualizar', 'Actualiza el estado de una tarea', otpsA)
    .command('borrar', 'Borra todo un elemento por hacer', otpsB)
    .help()
    .argv;

module.exports = {
    argv
}