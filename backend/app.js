'use strict';

require('dotenv').config()
process.env.NODE_ENV = ( process.env.NODE_ENV && ( process.env.NODE_ENV ).trim().toLowerCase() == 'production' ) ? 'production' : 'development';

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/users');
const apiRouter = require('./routes/api');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// app.use(express.static(path.join(__dirname, 'public'))); // react 로 변경
app.use(express.static(path.join(process.cwd(), '/frontend/dist')));

//app.use('/',express.static(path.join(process.cwd(), '/frontend/dist')));
app.use('/', indexRouter);

//특정 주소 cors 확인
let corsOptions = {
  origin: 'http://127.0.0.1:3001',
  credentials: true
}
app.use('/api', cors(corsOptions));
app.use('/api', apiRouter);

// app.use( '/admin', express.static( path.join(__dirname, 'frontend/build') )) //서브디렉토리에 리액트 적용시
// app.use('/admin', adminRouter);



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
