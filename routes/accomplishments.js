const express = require('express');
const router = express.Router();

/*
 * @route      GET /api/accomplishments
 * @desc       Get user accomplishments
 * @access     Private
 */
router.get('/', (req, res) => {
  res.send('Read user accomplishments registered by resume-tracker server.');
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
