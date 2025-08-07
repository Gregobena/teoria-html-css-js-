let accion = 'listar'

switch (accion) { 
    case 'listar':
        console.log('accion de listar')
        break // OBLIGATORIO
    case 'guardar':
        console.log('accion de guardar')
        break // OBLIGATORIO 
    default: // seria un else 
        console.log('accion desconocida')
}