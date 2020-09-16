class NoteController {
  constructor(noteList, note) {
    this.noteList = noteList;
    noteList.createNote(note);
    this.noteView = new NoteListView(this.noteList);
  }

  getHtml() {
    let app = document.getElementById("app");
    app.innerHTML = this.noteView.returnView();
  }
}

// document.addEventListener("DOMContentLoaded", () => {
//   let app = document.getElementById("app");

//   let noteList = new NoteList();
//   noteList.createNote("Favourite drink: seltzer");
//   let noteView = new NoteListView(noteList);
//   app.innerHTML = noteView.returnView();
// });

// Code uses Javascript classes to define a note controller that can be instantiated.
// The note controller constructor does the following:
// Takes a note list model as a parameter.
// Adds a note that says Favourite drink: seltzer.
// Creates a note list view, passing in the note list model.
// The note controller has a method that gets HTML from the note list view and inserts it into the app element.
