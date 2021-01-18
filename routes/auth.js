const express = require('express');
const router = express.Router();

/*
 * @route      GET /api/auth
 * @desc       Get logged in user
 * @access     Public
 */
router.get('/', (req, res) => {
  res.send('Get logged in user registered by resume-tracker server.');
});

/*
 * @route      POST /api/auth
 * @desc       Auth user and get token
 * @access     Public
 */
router.post('/', (req, res) => {
  res.send('Authenticate user registered by resume-tracker server.');
});

module.exports = router;
