import mongoose from 'mongoose';

const Scheme = mongoose.Scheme;

/**
 * Declare NoteScheme scheme
 */
const NoteScheme = new Scheme({
  title: {type: String},
  text: {type: String, required: true},
  color: {type: String},
  createdAt: {type: Date}
});

/**
 * Declare Note model
 */
const Note = mongoose.model('Note', NoteScheme);