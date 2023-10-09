'use strict';

import express from 'express';
const router = express.Router();
import apiController from '../controllers/apiController.js';

// /api/data 엔드포인트에 대한 GET 요청 처리
router.get('/', apiController.home);
export default router;
