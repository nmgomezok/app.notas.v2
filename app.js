let tareas = require('./tareas');

let accion = process.argv[2];

switch(accion) {
    case 'listar':
        tareas.list();
        break;

    case 'crear':
        const nuevaTarea = {
            titulo: process.argv[3],
            estado: 'pendiente'
        };
        tareas.save(nuevaTarea);
        break;
   
    case 'filtrar':
        const estado = process.argv[3];
        const tareasFiltradas = tareas.filter(estado);
        tareas.list(tareasFiltradas);
        break;
    
    case undefined:
        console.log('tenés que pasar algo');
        break;

    default:
        console.log('no entendí lo que quisiste decir');
        console.log('probá con listar, crear o filtrar');
        break;
}
