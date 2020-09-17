class NoteController {
  constructor(noteList) {
    this.noteList = noteList;
    this.noteList.createNote('NOte !');
    this.noteList.createNote('NOte TWO !');
    this.noteView = new NoteListView(this.noteList);
  }

  getHtml() {
    return this.noteView.returnView();
  }

   showNoteForPage() {
    console.log(this.getNoteFromUrl(window.location))
    this.showNote(this.getNoteFromUrl(window.location))
  }
  
   getNoteFromUrl(location) {
    id = location.hash.split("#note-")[1];
    return this.noteList.getSingleNoteById(id)
  }
  
  showNote(note) {
    document.getElementById("app").innerHTML = note.text;
  }
  
}

let notesController = new NoteController(new NoteList());
document.getElementById("app").innerHTML = notesController.getHtml();


window.onhashchange = notesController.showNoteForPage;




