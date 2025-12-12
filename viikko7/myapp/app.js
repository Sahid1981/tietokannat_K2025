var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//helmetin lisäys
const helmet = require('helmet')
app.use(helmet())
app.disable('x-powered-by');

app.use('/', indexRouter);
app.use('/users', usersRouter);

//omat lisät
const bookRouter = require('./routes/book');
app.use('/book', bookRouter);
const borrowerRouter = require('./routes/borrower');
app.use('/borrower', borrowerRouter);
const opiskelijaRouter = require('./routes/opiskelija');
app.use('/opiskelija', opiskelijaRouter);
const arviointiRouter = require('./routes/arviointi');
app.use('/arviointi', arviointiRouter);
const opintojaksoRouter = require('./routes/opintojakso');
app.use('/opintojakso', opintojaksoRouter);

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
