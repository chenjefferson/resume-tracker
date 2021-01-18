const express = require('express');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

/* middleware */
// body parser
app.use(express.json({ extended: false }));

app.get('/', (req, res) =>
  res.json({ msg: 'GET registered on resume-tracker API' })
);

// define routes
app.use('/api/users', require('./routes/users'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/accomplishments', require('./routes/accomplishments'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
