import dotenv from 'dotenv';
dotenv.config();

const nodeEnv = process.env.NODE_ENV;
process.env.NODE_ENV = nodeEnv && nodeEnv.trim().toLowerCase() === 'production' ? 'production' : 'development';

import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path,{ dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const currentDir = dirname(__filename);

// 상위 디렉토리의 경로를 구성합니다.
const parentDir = join(currentDir, '..'); // 상위 디렉토리로 이동
const staticDir = join(parentDir, 'frontend', 'dist');
console.log(staticDir)
import indexRouter from './routes/index.js';
import apiRouter from './routes/api.js';

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'public'))); // react 로 변경
app.use(express.static(staticDir));

// app.use('/', express.static(path.join(process.cwd(), '/frontend/dist')));
app.use('/', indexRouter);

// 특정 주소 cors 확인
// let corsOptions = {
//   origin: 'http://127.0.0.1:3000',
//   credentials: true
// }
// app.use('/api', cors(corsOptions));
app.use('/api', apiRouter);

// app.use( '/admin', express.static( path.join(__dirname, 'frontend/build') )) // 서브디렉토리에 리액트 적용시
// app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export default app;
