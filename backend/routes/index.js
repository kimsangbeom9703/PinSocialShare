'use strict';

import express from 'express';
import path from 'path';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

export default router;
