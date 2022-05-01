var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const { Pool } = require('pg')

const pool = new Pool({
 connectionString: "postgres://iggtwjwujexdxz:ba72206bc93afe870b1badc7f1a3c31c03f289ab15a9a54c2f6bf0c855dfd31a@ec2-34-197-84-74.compute-1.amazonaws.com:5432/d5f5nfpk8n8hrq",
 ssl: {
 rejectUnauthorized: false
 }
});

pool.query(`SELECT * FROM players;`, (err, res) => {
    if (err) {
        console.log("Error - Failed to select all from Players");
        console.log(err);
    }
    else{
        console.log(res.rows);
    }
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
module.exports = pool;
