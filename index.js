document.addEventListener('DOMContentLoaded', () => {
  let noteList = new NoteList();
  let notesController = new NoteController(noteList);

  noteList.createNote('NOte !');
  noteList.createNote('NOte TWO !');

  notesController.getHtml();

  function changeUrl() {
    window.addEventListener("hashchange", 'note[1]')
  }

  function changeNoteOnClick(){
    document.getElementById('note-1').addEventListener('click', function clickEvent() {
     
      console.log('hello')
    })

  }
  
changeNoteOnClick()
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


