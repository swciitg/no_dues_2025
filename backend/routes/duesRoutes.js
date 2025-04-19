import express from 'express';
import { addDue, deleteDue, getAllDues, getDuesBySection, getDuesBySubsection } from '../controllers/dueController.js';

const router = express.Router();

router.get('/dues', getAllDues);
router.get('/:section', getDuesBySection);
router.get('/:section/:subsection', getDuesBySubsection);
router.post('/:section/:subsection', addDue);
router.delete('/:section/:subsection', deleteDue);