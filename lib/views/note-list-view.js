class NoteListView {
  constructor(notelist) {
    this.notelist = notelist;
  }

  returnView() {
    if (this.notelist.returnNotes()[0]) {
      var text = this.notelist.returnNotes().map((item) => {
        return `<li><div><a id="note-${item.id}" href="#note-${
          item.id
        }">${item.getText().slice(0, 21)}</a></div></li>`;
      });
    } else {
      text = [];
    }
    return `<ul>${text.join('')}</ul>`;
  }
}
