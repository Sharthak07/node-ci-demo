
const express = require('express');
const app = express();

app.use(express.json());

// Route 1 - Home
app.get('/', (req, res) => {
  res.json({ message: 'Hello from CI pipeline' });
});

// Route 2 - Add two numbers
app.get('/add/:a/:b', (req, res) => {
  const a = Number(req.params.a);
  const b = Number(req.params.b);
  res.json({ result: a + b });
});

// Route 3 - Greet a user
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  res.json({ message: `Hello, ${name}` });
});

module.exports = app;