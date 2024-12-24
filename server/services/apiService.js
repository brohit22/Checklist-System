const axios = require('axios');
const { apiUrl } = require('../config/config');

const fetchApplicationData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data from external API');
  }
};

module.exports = { fetchApplicationData };
