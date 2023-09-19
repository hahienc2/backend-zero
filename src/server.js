const express = require('express')
const app = express();
const port = 3000;
const path = require('path');

// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// khai bao route
app.get('/abc', function (req, res) {
  res.send('Hello World ABC')
})

app.get('/hehe', function (req, res) {
  res.render('sample.ejs')
})

app.listen(port)

// Ctrl + C : tat 