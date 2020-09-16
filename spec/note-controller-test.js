describe(NoteController, () => {
  it('Create a new note controller with a note inside', () => {
    let noteList = new NoteList();
    let controller = new NoteController(noteList);
    expect(controller.noteList).toBe(noteList);
  });

  it('create a note and display it on the page', () => {
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

      expect(app.innerHTML).toBe(
        '<ul><li id="note-0"><div>Test text</div></li></ul>'
      );
    });
  });
});
