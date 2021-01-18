const mongoose = require('mongoose');

const AchievementSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  },
  title: {
    type: String,
    requried: true,
    default: 'Title',
  },
  summary: {
    type: String,
    default: 'Summary',
  },
  actions: [
    {
      type: String,
    },
  ],
  type: {
    type: String,
    default: 'Project',
  },
  begin: {
    type: Date,
    default: Date.now,
  },
  end: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('achievement', AchievementSchema);
