import axios from 'axios';

import { apiPrefix } from './../../etc/config.json';

export default {
  listNotes() {
    return axios.get(`${apiPrefix}/notes`);
  },

  createNotes(data) {
    return axios.post(`${apiPrefix}/notes`, data);
  },

  listNotes(noteId) {
    return axios.delete(`${apiPrefix}/notes/${noteId}`);
  }
};