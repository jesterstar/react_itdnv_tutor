import React from 'react';

import NoteEditor from './NoteEditor.jsx';
import NoteGrid from './NoteGrid.jsx';

import './App.less';

const App = React.createClass({
  handleNoteAdd(data) {
      console.log(data);
  },

  render() {
    return (
      <div className='App'>
        <h2 className="App__header">NotesApp</h2>
        <NoteEditor name={this.handleNoteAdd}/>
        <NoteGrid />
      </div>
    );
  }
});

export default App;