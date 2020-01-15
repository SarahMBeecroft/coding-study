const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  date: {
    type: Date, default: Date.now
  },
  title: { 
    type: String, required: false 
  },
  link: { 
    type: String, required: false 
  },
  studyType: { 
    type: String, required: false 
  }
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;