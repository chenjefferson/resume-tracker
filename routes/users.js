const express = require('express');
const router = express.Router();

/*
 * @route      GET /api/users
 * @desc       Get logged in user
 * @access     Public
 */
router.get('/', (req, res) => {
  res.send('Get logged in user registered by resume-tracker server.');
});

/*
 * @route      POST /api/users
 * @desc       Create new user
 * @access     Public
 */
router.post('/', (req, res) => {
  res.send('Authenticate user registered by resume-tracker server.');
});

module.exports = router;
