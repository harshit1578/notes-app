const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create Add command
yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption : true,
            type : 'string'
        },
        body: {
            describe: 'Note Description',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function (argv){
       notes.addNote(argv.title,argv.body)
    }
})

// Create remove command 
yargs.command({
    command: 'remove',
    describe: 'Removes a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})

// Create list Command 
yargs.command({
    command: 'list',
    describe: 'List your notes.',
    handler: function (){
        notes.listNotes()
    }
})

// Create read Command 
yargs.command({
    command: 'read',
    describe: 'Read a note.',
    builder: {
        title: {
            describe: 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler: function (argv){
        notes.readNote(argv.title)
    }
})
yargs.parse()
