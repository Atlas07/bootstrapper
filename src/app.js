const express = require('express');
const bodyParser = require('body-parser');

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
    res.json({ users: users.get() });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

app.post('/user', (req, res) => {
  try {
    const { user } = req.body;
    users.add(user);

    res.json({ added: true });
    // TODO: add broadcast to other nodes
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
});

app.listen(port || 5050, () => {
  console.log(`bootstraped on port:${port}`);
});
