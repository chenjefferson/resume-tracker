const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Achievement = require('../models/Achievement');

/*
 * @route      GET /api/achievements
 * @desc       Get user achievements
 * @access     Private
 */
router.get('/', auth, async (req, res) => {
  try {
    const achievements = await Achievement.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(achievements);
  } catch (e) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

/*
 * @route      POST /api/accomplishments
 * @desc       Add a new accomlishment
 * @access     Private
 */
router.post('/', (req, res) => {
  res.send('Add new accomplishment registered by resume-tracker server.');
});

/*
 * @route      PUT /api/accomplishments/:id
 * @desc       Update a contact
 * @access     Private
 */
router.put('/:id', (req, res) => {
  res.send('Put accomplishment registered by resume-tracker server.');
});

/*
 * @route      DELETE /api/accomplishments/:id
 * @desc       Delete an accomplishment
 * @access     Private
 */
router.delete('/:id', (req, res) => {
  res.send('Delete accomplishment registered by resume-tracker server.');
});

module.exports = router;
