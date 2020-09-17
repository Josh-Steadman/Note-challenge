class NoteList {
  constructor() {
    this.notes = [];
    this.counter = 0;
  }
  createNote(text) {
    var newNote = new Note(text, this.counter);
    this.notes.push(newNote);
    this.counter++;
  }
  returnNotes() {
    return this.notes;
  }

  getSingleNoteById(id) {
    var note = this.notes.filter(note => note.id === id).join();
  }
}
