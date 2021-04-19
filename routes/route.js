const express = require('express');

const path = require('path');

const router = express.Router();

router.all('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../html/index.html'));
});

module.exports = router;
