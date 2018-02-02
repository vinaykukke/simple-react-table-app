import express from 'express';
import path from 'path';
import request from 'request';

const router = express.Router();

router.use('/assets', express.static(path.join(__dirname, 'assets')));

router.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

export default router;
