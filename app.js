const chalk = require("chalk");
const yargs = require("yargs")
const notes = require("./notes");


//creating a new command 
yargs.command({
    command:'add',
    describe:'add a new note',
    builder:{
        title:{
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body:{      
            describe:"Note body",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command:"remove",
    describe:"remove note",
    builder: {
        title:{
            describe:"Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:"list",
    describe:"list all notes",
    handler(){
        notes.listNotes()
    }
})

yargs.command({
    command:"read",
    describe:"read a note",
    builder:{
        title:{
            describe: "note title",
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.read(argv.title)
    }
})

yargs.command({
    command:"removeAll",
    describe: "remoce all notes",
    handler(){
        notes.removeAll()
    }
})


yargs.parse();
