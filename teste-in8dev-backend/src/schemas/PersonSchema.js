const {Schema} = require('mongoose');
const mongoose = require('../database/connection');

const personSchema = new Schema({
  name: String,
  email: String,
  birth: Date,
  phone: String,
});

const PersonSchema = mongoose.model('person', personSchema);

module.exports = PersonSchema;