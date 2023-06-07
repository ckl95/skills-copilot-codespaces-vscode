// Create web server
// npm install express --save
const express = require('express');
const app = express();
const port = 3000;

// npm install body-parser --save
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// npm install cors --save
const cors = require('cors');
app.use(cors());

// npm install mongoose --save
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demodb', { useNewUrlParser: true, useUnifiedTopology: true });

const commentSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

const Comment = mongoose.model('Comment', commentSchema);

app.get('/comments', (req, res) => {
  Comment.find({}, (err, comments) => {
    res.send(comments);
  });
});

app.post('/comments', (req, res) => {
  let comment = new Comment(req.body);
  comment.save((err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});