require('dotenv').config();

const weatherApiKey = process.env.WEATHER_API_KEY;

const axios = require('axios');

// Replace 'your_api_endpoint' with the actual endpoint provided by Tomorrow.io
const apiUrl = 'http://localhost:63343/portfolio/weather';

// Set up the parameters including the API key
const params = {
  apikey: weatherApiKey,
  // ... other parameters required by the API
};

// Make the GET request using axios
axios.get(apiUrl, { params })
  .then(response => {
    // Process the response data
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error making the API call:', error);
  });

