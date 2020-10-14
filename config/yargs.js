const argv = require('yargs')
            .command('crear','Crea la nueva tarea',{
                descripcion: {
                    demand:true,
                    alias: 'd',
                    desc: 'Descripcion de la tarea por hacer'
                }
            })
            .command('actualizar','Actualiza el estado de una tarea',{
                descripcion: {
                    demand:true,
                    alias: 'd'
                },
                estado:{
                    demand: true,
                    alias: 'e',
                    default: true
                }
            })
            .command('borrar','Elimina una tarea',{
                descripcion: {
                    demand:true,
                    alias: 'd'
                }
            })
            .help()
            .argv;




module.exports = {

    argv
    
}