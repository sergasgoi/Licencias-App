var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var inicioRouter = require('./routes/inicio');
var cargarRouter = require('./routes/cargar');
var reporteRouter = require('./routes/reporte');
var reporteeRouter = require('./routes/reportee');
var cargareRouter = require('./routes/cargare');
var cargarempRouter = require('./routes/cargaremp');
var editarempRouter = require('./routes/editaremp');
var editarempeRouter = require('./routes/editarempe');
var borrarempRouter = require('./routes/borraremp');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret:'algunacosa',
  resave: false,
  saveUninitialized: true
}));

secured = async (req, res, next) => {
  try{
    if(req.session.id_usuario){
      next();
    }else{
      res.redirect('/');
    }
  }catch(error){
    console.log(error);
  }
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/inicio', inicioRouter);
app.use('/cargar', cargarRouter);
app.use('/reporte', reporteRouter);
app.use('/reportee', reporteeRouter);
app.use('/cargare', cargareRouter);
app.use('/cargaremp', cargarempRouter);
app.use('/editaremp', editarempRouter);
app.use('/editarempe', editarempeRouter);
app.use('/borraremp', borrarempRouter);

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
