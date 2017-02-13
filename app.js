'use strict';

var express = require('express');
var app = express();
var port = 5000;
 

//Express will always check in public file for any CSS file, All routes comes after this
app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

 
console.log('Server is starting on port : '+ port);
app.listen(port);