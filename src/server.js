const express = require('express');// commonjs
const path = require('path');//commonjs
require('dotenv').config()

// import express from 'express //es modules
console.log("check env = ", process.env)
const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;
// config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// config static files
app.use(express.static(path.join(__dirname,'public')));

// khai bao route
app.get('/abc', function (req, res) {
  res.send('Hello World ABC')
})

app.get('/hehe', function (req, res) {
  res.render('sample.ejs')
})

app.listen(port, () => {console.log('port = ',port)})

// Ctrl + C : tat 