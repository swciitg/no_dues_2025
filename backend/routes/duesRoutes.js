import express from 'express';
import { addDue, deleteDue, getAllDues, getDuesBySection, getDuesBySubsection } from '../controllers/dueController.js';

const router = express.Router();

router.get('/', getAllDues);
router.get('/:section', getDuesBySection);
router.get('/:section/:subsection', getDuesBySubsection);
router.post('/', addDue);
router.delete('/', deleteDue);
// router.post('/:section/:subsection/csv' , uploadCSV);