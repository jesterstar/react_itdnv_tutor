import { EventEmitter } from 'events';

import toastr from 'toastr';

import AppDispatcher from './../dispatcher/AppDispatcher';
import AppConstants from './../constants/AppConstants';

const CHANGE_EVENT = 'change';

let _notes = [];
let _loadingError = null;
let _isLoading = true;

// let _conectionSuccess = false;
// let _conectionFail = false;
// let _conectionError = false;

function formatNote(note) {
  return {
    id: note._id,
    title: note.title,
    text: note.text,
    color: note.color || '#ffffff',
    createdAt: note.createdAt
  };
}

const NotesStore = Object.assign({}, EventEmitter.prototype, {
  isLoading() {
    return _isLoading;
  },

  getNotes() {
    return _notes;
  },

  emitChange() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  switch(action.type) {
    case AppConstants.LOAD_NOTES_REQUEST: {
      _isLoading = true;

      NotesStore.emitChange();
      break;
    }

    case AppConstants.LOAD_NOTES_SUCCESS: {
      _isLoading = false;
      _notes = action.notes.map( formatNote );
      _loadingError = null;

      NotesStore.emitChange();
      break;
    }

    case AppConstants.LOAD_NOTES_FAIL: {
      _loadingError = action.error;

      NotesStore.emitChange();
      break;
    }

    case AppConstants.LOAD_CONNECTION_REQUEST: {
      toastr.success('Api server is running');
      break;
    }

    case AppConstants.LOAD_CONNECTION_SUCCESS: {
      console.log('connection to db');
      break;
    }

    case AppConstants.LOAD_CONNECTION_FAIL: {
      toastr.error('Api server is down');
      break;
    }

    default: {
      console.log('No such handler');
    }
  }
});

export default NotesStore;