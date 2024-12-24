const express = require('express');
const cors = require('cors');
const { port } = require('./config/config');
const checklistRoutes = require('./routes/checklistRoutes');
const errorHandler = require('./middleware/errorhandler.js');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', checklistRoutes);

// Error Handler
app.use(errorHandler);

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
