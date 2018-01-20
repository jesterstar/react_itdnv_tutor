import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import {serverPort} from './../etc/config.json';

import * as db from './utils/DataBaseUtils';

/**
 * Setup connection with db
 */
db.setUpConnection();

/**
 * Declare app
 */
const app = express();

/**
 * Use JSON format in app
 */
app.use( bodyParser.json() );

/**
 * Use cors
 */
app.use( cors({ origin: "*" }) );

/**
 * Get all notes from db
 */
app.get('/notes', (req, res) => {
  db.listNotes().then(data => res.send(data));
});

/**
 * Create new note in db
 */
app.post('/notes', (req, res) => {
  db.createNote(req.body).then(data => res.send(data));
});

/**
 * Delete note from db
 * @param {string} id - note id
 */
app.delete('/notes/:id', (req, res) => {
  db.deleteNote(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, () => {
  console.log(`Server is up and running on port ${serverPort}`);
});