var express = require('express');
var app = express();

var vuelo = require("./Vuelo.js");
var billete = require("./Billete.js");

var vuelos = new Object;

var server_ip_address = '0.0.0.0';
app.set('port',5000);

app.get('/',function(req,response)){
  if(!vuelos){
    response.status(200).send("Página inicio de la agencia de vuelos.")
  }
  else{
    response.status(200).send(vuelos);
  }
}

// forma de crear un nuevo destino
app.put('/vuelo/:origen/:destino/:dia/:hora', function(req,response) {
  var nuevoVuelo = new vuelo.Vuelo(req.params.origen,req.params.destino,
                                    req.params.dia,req.params.hora);
  vuelos[nuevoVuelo.ID] = nuevoVuelo;
  response.status(200).send(nuevoVuelo);
});

// forma de crear una instancia nueva de Billete
app.put('/billete/:persona/:origen/:destino/:dia/:hora',function(req,response){
  var datosVuelo = new vuelo.Vuelo(req.params.origen,req.params.destino,req.params.dia,
                                req.params.hora);
  if(!datosVuelo){
    response.status(404).send("No existe el vuelo");
  }
  else{
    var nuevoBillete = new billete.Billete(datosVuelo,req.params.persona);
    response.status(200).send(nuevoBillete);
  }
});

app.get('/vuelos',function(req,response){
  response.send(vuelos);
});

app.get('/vuelo/:origen/:destino/:dia/:hora',function(req,response){
  var v = new vuelo.Vuelo(req.params.origen,req.params.destino,
                                    req.params.dia,req.params.hora);
  var existe = vuelos[v.ID];
  if(existe){
    response.status(200).send(existe);
  }else{
    response.status(404).send(404);
  }
});

app.listen(app.get('port'),server_ip_address,function(){
  console.log("La aplicación está corriendo en http://"+server_ip_address+":"+app.get('port'));
});



/*
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');





// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
*/

module.exports = app;
