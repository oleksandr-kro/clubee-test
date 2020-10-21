const express = require('express');
const data = require('./mock-data');
const cors = require('cors');
const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/articles', async (req, res) => {
  res.json(data.articles);
});

app.listen(PORT, () => {
  console.log(`Server is starting on port ${PORT}`);
});