//75ba19df-f16a-478b-b34a-d01055698868
const axios = require('axios');
require('dotenv').config();

const API = process.env.API;

const headers = {
  'accept': 'application/json',
  'x-api-key': API
};

const data = {
  name: 'NFT Transfer',
  expression: 'KHR4X2xvZ3NfdG9waWMxID1+ICdkNEJkYTUyQzg0Qzc2ODc5RDUwQUE3Y0I1MzMzOEYxN0QxZDA2RDREJykgJiYgDQoodHhfbG9nc19hZGRyZXNzID09ICcweGVmM0M5YzJhOUIzRDE2MzAyZTNlNWNkQjA5QWI3OGQxZUUyZDU5YTAnKSAmJiANCih0eF9sb2dzX3RvcGljMCA9PSAnMHhkZGYyNTJhZDFiZTJjODliNjljMmIwNjhmYzM3OGRhYTk1MmJhN2YxNjNjNGExMTYyOGY1NWE0ZGY1MjNiM2VmJyk=',
  network: 'ethereum-sepolia',
  destinationIds: ['b38e87dc-5636-420e-a04c-d3f18b35b45c']
};

axios.post('https://api.quicknode.com/quickalerts/rest/v1/notifications', data, { headers })
  .then(response => console.log(response.data))
  .catch(error => console.log('error', error));

// (tx_logs_topic1 =~ 'd4Bda52C84C76879D50AA7cB53338F17D1d06D4D') && 
// (tx_logs_address == '0xef3C9c2a9B3D16302e3e5cdB09Ab78d1eE2d59a0') && 
// (tx_logs_topic0 == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef')
// Encode above line in base64 :- https://base64.guru/converter/encode