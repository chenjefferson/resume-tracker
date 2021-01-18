const mongoose = require('mongoose');
const config = require('config');

const db = config.get('MONGO_URI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (e) {
    console.log(e.message);
    process.exit(1);
  }
};

module.exports = connectDB;
