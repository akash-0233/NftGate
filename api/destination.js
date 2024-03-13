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
  to_url: 'https://ab81-2409-40c2-100e-8f63-748c-3085-e936-a8d7.ngrok-free.app/webhook',
  webhook_type: 'POST',
  service: 'webhook',
  payload_type: 5
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/destinations', data, { headers })
  .then(response => console.log("Response Data",response.data))
  .catch(error => console.log('error', error));
