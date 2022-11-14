var express = require('express');

var cookieParser = require('cookie-parser');
var logger = require('morgan');


var usersRouter = require('./routes/api/users');
var bindingsRouter = require('./routes/api/bindings');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/users', usersRouter);
app.use('/api/bindings', bindingsRouter);

module.exports = app;
