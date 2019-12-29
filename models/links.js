const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  link: { 
    type: String, required: true 
  },
  title: { 
    type: String, required: true 
  },
  studyType: { 
    type: String, required: true 
  }
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;