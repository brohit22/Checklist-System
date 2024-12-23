import express from 'express';
import { getChecklist } from '../controllers/checklistController.js';

const router = express.Router();

router.get('/', getChecklist);

export default router;
