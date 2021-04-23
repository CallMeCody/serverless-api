'use strict';

const dynamoose = require('dynamoose');

const personSchema = dynamoose.Schema({
  id: String,
  name: String,
  phone: String
});

module.exports = dynamoose.model('people', personSchema)