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
 * @route      POST /api/achievements
 * @desc       Add a new achievement
 * @access     Private
 */
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Achievement title is requried').not().isEmpty(),
      check('type', 'Achievement type is required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }

    const { title, summary, actions, type } = req.body;

    try {
      const newAchievement = new Achievement({
        title,
        summary,
        actions,
        type,
        user: req.user.id,
      });

      const contact = await newAchievement.save();
      res.json(contact);
    } catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
    }
  }
);

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
