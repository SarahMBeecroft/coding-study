import axios from 'axios';

export default {
  // Gets all links
  getLinks: function() {
    return axios.get('/api/links');
  },
  // Gets the link with the given id
  getLink: function(id) {
    return axios.get('/api/links/' + id);
  },
  // Deletes the link with the given id
  deleteLink: function(id) {
    return axios.delete('/api/links/' + id);
  },
  // Saves a link to the database
  saveLink: function(savedLinks) {
    return axios.post('/api/links', savedLinks);
  }
};