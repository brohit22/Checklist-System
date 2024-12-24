require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  apiUrl: process.env.API_URL,
};
