var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ciudadesRouter = require('./routes/ciudades');
var entidadesRouter = require('./routes/entidades');
var estadoscivilesRouter = require('./routes/estadosciviles');
var regimenmatrimonialRouter = require('./routes/regimenmatrimonial');
var municipiosRouter = require('./routes/municipios');
var localidadesRouter = require('./routes/localidades');
var tipovialidadRouter = require('./routes/tipovialidad');
var declaracionesRouter = require('./routes/declaraciones');

var app = express();
app.use(cors())

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
app.use('/ciudades', ciudadesRouter);
app.use('/entidades', entidadesRouter);
app.use('/estadosciviles', estadoscivilesRouter);
app.use('/regimenmatrimonial', regimenmatrimonialRouter);
app.use('/municipios', municipiosRouter);
app.use('/localidades', localidadesRouter);
app.use('/tipovialidad', tipovialidadRouter);
app.use('/declaraciones', declaracionesRouter);

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
