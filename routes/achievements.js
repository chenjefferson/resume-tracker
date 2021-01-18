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
 * @desc       Update an achievement
 * @access     Private
 */
router.put('/:id', auth, async (req, res) => {
  const { title, summary, actions, type } = req.body;

  // build
  const achievementFields = {};
  if (title) achievementFields.title = title;
  if (summary) achievementFields.summary = summary;
  if (actions) achievementFields.actions = actions;
  if (type) achievementFields.type = type;

  try {
    let achievement = await Achievement.findById(req.params.id);

    if (!achievement)
      return res.status(404).json({ msg: 'Achievement not found' });

    // make sure user owns achievement
    if (achievement.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    achievement = await Achievement.findByIdAndUpdate(
      req.params.id,
      { $set: achievementFields },
      { new: true }
    );

    res.json(achievement);
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

/*
 * @route      DELETE /api/accomplishments/:id
 * @desc       Delete an accomplishment
 * @access     Private
 */
router.delete('/:id', auth, async (req, res) => {
  try {
    let achievement = await Achievement.findById(req.params.id);

    if (!achievement)
      return res.status(404).json({ msg: 'Achievement not found' });

    // make sure user owns achievement
    if (achievement.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'Not authorized' });
    }

    achievement = await Achievement.findByIdAndRemove(req.params.id, {
      useFindAndModify: false,
    });

    res.json(achievement);
  } catch (e) {
    console.error(e.message);
    return res.status(500).json({ msg: 'Server Error' });
  }
});

module.exports = router;
