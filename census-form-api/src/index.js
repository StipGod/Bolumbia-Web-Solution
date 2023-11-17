const express = require('express');
const app = express();
const port = 3001;
const authRoutes = require('./routes/authRoutes');

app.use(express.json());
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Census Form API!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
