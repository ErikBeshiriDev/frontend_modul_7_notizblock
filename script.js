

let notes = ['banana', 'rasen mähen'];

function renderNotes() {
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        const note = notes[indexNote];
        contentRef.innerHTML += getNoteTemplate(note);
    }
}

function getNoteTemplate(note) {
    return `<p>+ ${note}</p>`
}









//notizen hinzufügen
//notizen löschen
//notizen archivieren