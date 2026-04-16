require('dotenv').config();

const express = require('express');
const app = express();


const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/home', (req, res) => {
  res.send("this is home page");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});