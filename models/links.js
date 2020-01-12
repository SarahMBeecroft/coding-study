const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  link: { 
    type: String, required: false 
  },
  title: { 
    type: String, required: false 
  },
  studyType: { 
    type: String, required: false 
  }
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;