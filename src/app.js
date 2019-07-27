const express = require('express');
const bodyParser = require('body-parser');
const ip = require('ip');

const User = require('./User');

const app = express();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

const [port] = process.argv.slice(2);
const users = new User();

app.get('/users', (req, res) => {
  try {
    res.json({ users: users.getUsers() });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Provide all necessary data' });
  }
});

app.post('/user', (req, res) => {
  try {
    users.addUser({
      ip: req.body.ip,
      port: req.body.port,
      walletAddress: req.body.walletAddress,
    });

    res.json({ added: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: 'Provide all necessary data' });
  }
});

app.listen(port || 5050, () => {
  console.log(`bootstraped on port:${port || 5050}`);
  console.log(`ip:${ip.address()}`);
});
