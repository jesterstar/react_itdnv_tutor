import React from 'react';

import Masonry from 'react-masonry-component';
import Note from './Note.jsx';

import './NotesGrid.less';

const NoteGrid = React.createClass({
  render() {
    const masonryOptions = {
      itemSelector: '.Note',
      columnWidth: 250,
      gutter: 10,
      isFitWidth: true
    };

    return (
      <div>
        <Masonry
          className={!this.props.notes ? 'NotesGrid NoteGrid__nothing' : 'NotesGrid'}
          options={masonryOptions}
        >
          {
            this.props.notes
              ?
                this.props.notes.map(note =>
                  <Note
                    key={note.id}
                    title={note.title}
                    onDelete={this.props.note.onNoteDelete.bind(bull, note)}
                    color={note.color}
                  >
                    {note.text}
                  </Note>
                )
              :
                <span>Nothing to show</span>
          }
        </Masonry>
      </div>
    );
  }
});

export default NoteGrid;