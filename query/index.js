const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/posts', (req, res) => {

});

app.post('/events', (req, res) => {
  console.log('Received Event. Event : ', req.body.type);
  res.send({})
});

app.listen(4002, () => {
  console.log('Listen on Port 4002');
})