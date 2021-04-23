'use strict';

const personModel = require('./schema.js');
const uuid = require('uuid').v4;

exports.handler = async (event) => {

  console.log(event);

  try {
    const body = JSON.parse(event.body);
    const { name, phone } = body;
    const id = uuid();

    const record = new personModel({ id, name, phone })
    const data = await record.save();
    const savedRecord = JSON.stringify(data);

    return {
      statusCode: 201,
      response: savedRecord
    }

  } catch (e) {
    return {
      statusCode: 500,
      response: e.message
    }
  }

}