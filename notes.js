
const fs = require("fs")
const chalk = require("chalk")

const getNotes =  () => {
    try {
        const dataBuffered = fs.readFileSync("notes.json")
        const dataJson = dataBuffered.toString();
        notes = JSON.parse(dataJson);


        return notes;
    } catch (e) {
        return [];
    }
}

const addNote =  (title, body) => {


    const notes = getNotes();

    const duplicatedNote = notes.find( (note) => note.title == title)

    if (!duplicatedNote) {
        notes.push({
            title,
            body
        })

        saveNotes(notes);
        console.log(chalk.green.inverse("note has been added"))
    } else {
        console.log(chalk.red.inverse("title already exist"))
    }


}

const removeNote =  (title) =>{
    const notes = getNotes();

    const updatedNotes = notes.filter( (note)=> note.title !== title)

    if (notes.length > updatedNotes.length) {

        saveNotes(updatedNotes);
        console.log(chalk.green.inverse("note have been removed"))
    } else {
        console.log(chalk.red.inverse("there is no note with this title"))
    }

}

const saveNotes =  (notes) =>{
    const notesJson = JSON.stringify(notes)
    fs.writeFileSync("./notes.json", notesJson)
}


module.exports = {
    addNote,
    getNotes,
    removeNote
};