import mongoose from 'mongoose';

import './../modules/Note';

const Note = mongoose.model('Note');

/**
 * Setup connetion with db
 */
export function setUpConnection() {
  mongoose.connect(`mongodb://localhost/notes`);
}

/**
 * Get all notes from db
 */
export function listNotes() {
  return Note.find();
}

/**
 * Create new note in db
 */
export function createNote() {
  const note = new Note({
    title: data.title,
    text: data.text,
    color: data.color,
    createAt: new Date()
  });

  return note.save();
}

/**
 * Delete note from db
 * @param {string} id - note id
 */
export function deleteNote(id) {
  return Note.findById(id).remove();
}