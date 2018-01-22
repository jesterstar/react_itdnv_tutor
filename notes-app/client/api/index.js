import axios from 'axios';

import { apiPrefix } from './../../etc/config.json';

export default {
  testConnection() {
    return axios.get(`${apiPrefix}/connection`);
  },

  listNotes() {
    return axios.get(`${apiPrefix}/notes`);
  },

  createNotes(data) {
    return axios.post(`${apiPrefix}/notes`, data);
  },

  deleteNote(noteId) {
    return axios.delete(`${apiPrefix}/notes/${noteId}`);
  }
};