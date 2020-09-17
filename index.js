document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  notesController.getHtml();

  window.onhashchange = document.getElementById("test").innerHTML = 'test';


});

//window.onhashchange = document.getElementById("app").innerHTML = 'test';

// window.onhashchange = showNoteForPage;
//
// showNoteForPage() {
//   console.log(getNoteFromUrl(window.location))
//   showNote(getNoteFromUrl(window.location))
// }
//
// getNoteFromUrl(location) {
//   id = location.hash.split("#note-")[1];
//   return this.noteList.getSingleNoteById(id)
// }
//
// showNote(note) {
//   document.getElementById("app").innerHTML = note.text;
// }
