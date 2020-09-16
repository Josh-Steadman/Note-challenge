document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  notesController.getHtml();

  // function showNoteForPage() {
  //   showNote(getNoteFromUrl(window.location))
  // }

  // function getNoteFromUrl(location){
  //   return location.hash.split("#")[1];
  // }

  // function showNote(note) {
  //   document.getElementById("app").innerHTML = note.id
  // }
});
