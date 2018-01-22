import mongoose from 'mongoose';

import './../modules/Note';

import config from './../../etc/config.json';

const Note = mongoose.model('Note');

/**
 * Method for setup connection with db
 */
export function setUpConnection() {
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}

/**
 * Method to get all notes from db
 */
export function listNotes() {
  return Note.find();
}

/**
 * Method to create new note in db
 */
export function createNote(data) {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createAt: new Date()
  });

  return note.save();
}

/**
 * Method to delete note from db
 * @param {string} id - note id
 */
export function deleteNote(id) {
  return Note.findById(id).remove();
}