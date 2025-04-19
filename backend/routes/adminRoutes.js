import express from 'express';
import { addAdmin, getAdminList } from '../controllers/adminController.js';

const router = express.Router();

router.post('/',addAdmin);
router.post('/',getAdminList);

export default router;