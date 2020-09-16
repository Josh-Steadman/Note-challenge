class NoteList {
  constructor() {
    this.notes = []
  }
  createNote(text) {
    var newNote = new Note(text)
    this.notes.push(newNote)
  }
  returnNotes() {
    return this.notes
  }
  
}