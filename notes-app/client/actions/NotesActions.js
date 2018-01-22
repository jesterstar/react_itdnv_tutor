import AppDispatcher from './../dispatcher/AppDispatcher';
import Constants from './../constants/AppConstants';

import toastr from 'toastr';

import api from './../api';

const NoteActions = {
  loadNotes() {
    AppDispatcher.dispatch({
      type: Constants.LOAD_NOTES_REQUEST
    });

    api.listNotes()
      .then(({data}) => {
          AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_SUCCESS,
            notes: data
          })
        }
      )
      .catch(err =>
        AppDispatcher.dispatch({
          type: Constants.LOAD_NOTES_FAIL,
          error: err
        })
      );
  },

  createNote(note) {
    api.createNotes(note)
      .then(() => {
          this.loadNotes();
          toastr.success(`You add new note!`);
        }
      )
      .catch(err =>
        console.error(err)
      );
  },

  deleteNote(noteId) {
    api.deleteNote(noteId)
      .then(() =>{
          this.loadNotes();
          toastr.warning(`Note ${noteId} has been removed.`);
        }
      )
      .catch(err =>
        console.error(err)
      );
  }
};

export default NoteActions;