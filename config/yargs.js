const argv = require('yargs')
                    .option('b',{
                        alias:'base',
                        type: 'number',
                        demandOption: true,
                        describe:'Es la base de la multiplicacion'
                    })
                    .option('l',{
                        alias:'listar',
                        type: Boolean,
                        default: false,
                        describe: 'Muestra la tabla de multiplicacion en consola'
                    })
                    .option('h',{
                        alias:'hasta',
                        type: 'number',
                        demandOption: true,
                        describe: 'Limite de la tabla de multiplicar'
                    })
                    .check((argv, options) => {
                        if (isNaN(argv.b)){
                            throw 'La base no es un número'
                        }
                        return true
                    })
                    .argv;

module.exports = argv;