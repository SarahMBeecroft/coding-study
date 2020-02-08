const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
  date: {
    type: Date, default: Date.now
  },
  title: { 
    type: String, required: true 
  },
  link: { 
    type: String, required: true 
  },
  studyType: { 
    type: String, required: false 
  },
  inProgress: {
    type: Boolean, required: false
  }
});

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;