describe(SingleNote, () => {

     it('returns correct url + text', function() {
      document.addEventListener('DOMContentLoaded', () => {
        // Mock the page
        let app = document.createElement('div');
        app.setAttribute('id', 'app');
        //app.style.visibility = 'hidden';
        document.body.appendChild(app);
        // Run the test
        let noteModel = new NoteList();
        let controller = new NoteController(noteModel);
        noteModel.createNote('This is a massive long note for testing');
        controller.getHtml();

        document.getElementById("note-0").click()
        expect(app.innerHTML).toBe('<div>This is a massive long note for testing</div>');
        let url = window.location.href.split('/')
        expect(url[url.length -1]).toBe('testrunner.html#note-0')

     });

    });

});
