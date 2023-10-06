'use strict';

const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')


// /api/data 엔드포인트에 대한 GET 요청 처리
router.get('/',apiController.home);
module.exports = router;
