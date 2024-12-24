const express = require('express');
const { getChecklist } = require('../controllers/checklistController');

const router = express.Router();

router.get('/api/checklist', getChecklist);

module.exports = router;
