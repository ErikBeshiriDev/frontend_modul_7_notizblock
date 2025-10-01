

let notes = ['banana', 'rasen mähen'];

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button oclick="deleteNote(indexNote)>x</button></p>`
}

function addNote() {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput)

    renderNotes();

    noteInputRef.value = "";
}


//notizen löschen

// weelche notiz muss ge4löscht werden
// wann muss die notiz gelöscht werden
// anzeige updaten

function deleteNote(indexNote) {
    notes.spilce(indexNote, 1);
    renderNotes();
}













//notizen archivieren