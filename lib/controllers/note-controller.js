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
}

let notesController = new NoteController(new NoteList());
document.getElementById("app").innerHTML = notesController.getHtml();
window.onhashchange = document.getElementById("test").innerHTML = 'test';
