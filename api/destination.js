const axios = require('axios');
const { application } = require('express');
require('dotenv').config();

const API = process.env.API;

const headers = {
  'accept': 'application/json',
  'x-api-key': API
};

const data = {
  name: 'My Destination',
  to_url: 'https://cf0b-152-59-11-223.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));
