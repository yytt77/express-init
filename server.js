const express = require('express');

const app = express();

app.get('/', (req, res) => {
  console.log('vistd')
  res.send('Successful response!!!!!!!!!!!');
});

app.listen(5000, () => console.log('Example app is listening on port 5000.'));
