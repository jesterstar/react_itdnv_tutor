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
      <Masonry
        className={this.props.notes.length !== 0 ? 'NoteGrid' : 'NoteGrid NoteGrid__nothing'}
        options={masonryOptions}
      >
        {
          this.props.notes.length !== 0
          ?
            this.props.notes.map(note =>
              <Note
                key={note.id}
                title={note.title}
                onDelete={this.props.onNoteDelete.bind(null, note)}
                color={note.color}
                text={note.text}
              >
              </Note>
            )
          :
            <span><i className="zmdi zmdi-alert-circle" /> You don`t have any note. Add them!</span>
        }
      </Masonry>
    );
  }
});

export default NoteGrid;