describe(SingleNote, () => {

     it('returns correct url', function() {
      document.addEventListener('DOMContentLoaded', () => {
        // Mock the page
        let app = document.createElement('div');
        app.setAttribute('id', 'app');
        app.style.visibility = 'hidden';
        document.body.appendChild(app);
        // Run the test
        let noteModel = new NoteList();
        let controller = new NoteController(noteModel);
        noteModel.createNote('Test text');
        controller.getHtml();
        
        document.getElementById("note-0").click()
        let url = window.location.href.split('/')
        expect(url[url.length -1]).toBe('testrunner.html#note-0')
      
     });
     
    });
  // it('Return a single note', () => {
  //   let noteObject = new Note('THE TEXT');
  //   let note = new SingleNote(noteObject);

  //   expect(note.getHtml()).toBe('<div>THE TEXT</div>');
  // });
});
