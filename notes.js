
const fs = require("fs")
const chalk = require("chalk")

const getNotes = () => {
    try {
        const dataBuffered = fs.readFileSync("notes.json")
        const dataJson = dataBuffered.toString();
        notes = JSON.parse(dataJson);


        return notes;
    } catch (e) {
        return [];
    }
}

const addNote = (title, body) => {


    const notes = getNotes();

    const duplicatedNote = notes.find((note) => note.title == title)

    if (!duplicatedNote) {
        notes.push({
            title,
            body
        })

        saveNotes(notes);
        console.log(chalk.green.inverse("note has been added"))
    } else {
        warnMsg("title already exist")
    }


}

const removeNote = (title) => {
    const notes = getNotes();

    const updatedNotes = notes.filter((note) => note.title !== title)

    if (notes.length > updatedNotes.length) {

        saveNotes(updatedNotes);
        console.log(chalk.green.inverse("note have been removed"))
    } else {
        warnMsg("there is no note with this title")
    }

}

const listNotes = () => {

    const notes = getNotes();

    if (notes.length > 0) {
        notes.forEach((note) => {
            printNote(note)
        })
    } else {
        warnMsg("no notes to display")
    }

}

const removeAll = () => {

    const notes = []
    saveNotes(notes)

    warnMsg("all notes have been removed")
}

const read = (title) => {
    const notes = getNotes()
    const readableNode = notes.find((note) => note.title == title)
    if (readableNode) {

        printNote(readableNode)

    } else {
        warnMsg("there is no note with this title")
    }
}

const saveNotes = (notes) => {
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync("./notes.json", notesJson)
}


const printNote = (note)=>{
    console.log(chalk.green("==============================="))
    console.log("title: ", note.title)
    console.log("body : ", note.body)
    console.log(chalk.green("==============================="))
}

const warnMsg = (msg) => {
    console.log(chalk.red.inverse(msg))

}

module.exports = {
    addNote,
    getNotes,
    removeNote,
    listNotes,
    removeAll,
    read
};