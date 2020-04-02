var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// IMPORT ROUTES
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users.route');
var actividadesRouter = require('./routes/actividades.route');
var criteriosRouter = require('./routes/criterios.route');
var documentosRouter = require('./routes/documentos.route');
var verVideosRouter = require('./routes/verVideos.route');
var regempleadosRouter = require('./routes/regempleados.route');
var dependencias1Router = require('./routes/dependencias1.route');
//verificar la ruta de empleados


// IMPORT DB CONNECTION MANAGER
const dbManager = require ("./database.config/db.manager");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Set the routing routes to the each script
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/actividades', actividadesRouter);
app.use('/criterios', criteriosRouter);
app.use('/documentos', documentosRouter);
app.use('/vervideos', verVideosRouter);
app.use('/regempleados', regempleadosRouter);
app.use('/dependencias1', dependencias1Router);
//Verificar la ruta de empleados

/**
 * Testing the connection to the database and recreate the models if the tables doesn´t exists  
 */
dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    // recreate the models if the tables doesn´t exists
    dbManager.sequelizeConnection.sync().then(() => {
        console.log("the connection to the database poli_cct_db, has been established");
      });

  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = app;
