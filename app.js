const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const port = 8080;

app.get('/data', async (req, res) => {
  const { n, m } = req.query;
  
  const filePath = path.resolve(__dirname, 'tmp', 'data', `${n}.txt`);

  try {
    let lines;
    if (m) {
      lines = await fs.readFile(filePath, 'utf-8').then(content => content.split('\n'));
      res.send(lines[m - 1]); // Adjust for 0-based index
    } else {
      res.sendFile(filePath);
    }
  } catch (err) {
    console.error(err);
    res.status(400).send('Invalid request or file not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

