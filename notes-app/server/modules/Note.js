import mongoose from 'mongoose';

const Schema = mongoose.Schema;

/**
 * Declare NoteScheme scheme
 */
const NoteScheme = new Schema({
  title: {type: String},
  text: {type: String, required: true},
  color: {type: String},
  createdAt: {type: Date}
});

/**
 * Declare Note model
 */
const Note = mongoose.model('Note', NoteScheme);