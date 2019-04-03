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
    handler: function (argv){
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
    handler: function(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command:"list",
    describe:"list all notes",
    handler: function(){
        console.log("list all notes")
    }
})

yargs.command({
    command:"read",
    describe:"read a note",
    handler:function(){
        console.log("read a note")
    }
})


yargs.parse();
