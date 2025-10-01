

let notes = ['banana', 'rasen mähen'];

let trashNotes = [];


function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


function renderTrashNotes() {
    let trashContentRef = document.getElementById('trashcontent')
    trashContentRef = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button oclick="deleteNote(${indexNote})">x</button></p>`
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${notes[indexTrashNote]}<button oclick="deleteNote(${indexTrashNote})">x</button></p>`
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
    trashNote = notes.spilce(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}













//notizen archivieren