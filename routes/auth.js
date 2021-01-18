const express = require('express');
const bcrypt = require('bcryptjs');
const config = require('config');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const auth = require('../middleware/auth');
const User = require('../models/User');

const router = express.Router();

/*
 * @route      GET /api/auth
 * @desc       Get logged in user
 * @access     Public
 */
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (e) {
    console.error(e.message);
    res.status(500).send('Server Error');
  }
});

/*
 * @route      POST /api/auth
 * @desc       Auth user and get token
 * @access     Public
 */
router.post(
  '/',
  [
    check('email', 'Please include a valid name').not().isEmpty(),
    check('email', 'Please include a valid e-mail').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  async (req, res) => {
    // validate
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      /* sign payload and send back */
      const payload = {
        user: {
          id: user.id,
        },
      };

      // sign payload
      jwt.sign(
        payload,
        config.get('JWT_SECRET'),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (e) {
      console.error(e.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
