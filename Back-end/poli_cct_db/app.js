var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// IMPORT ROUTES
var indexRouter = require('./routes/index');
var actividadesRouter = require('./routes/actividades.route');
var ciudadRouter = require('./routes/ciudad.router');
var criteriosRouter = require('./routes/criterios.route');
var dependenciasRouter = require('./routes/dependencias.route');
var documentosRouter = require('./routes/documentos.route');
var empleadoRouter = require('./routes/empleado.route');
var regempleadosRouter = require('./routes/regempleados.route');
var sedesRouter = require('./routes/sede.router');
var ubicacionRouter = require('./routes/ubicacion.route');
var usersRouter = require('./routes/users.route');
var verVideosRouter = require('./routes/verVideos.route');
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
app.use('/actividades', actividadesRouter);
app.use('/ciudad', ciudadRouter);
app.use('/criterios', criteriosRouter);
app.use('/dependencias', dependenciasRouter);
app.use('/documentos', documentosRouter);
app.use('/empleado', empleadoRouter);
app.use('/regempleados', regempleadosRouter);
app.use('/sedes', sedesRouter);
app.use('/ubicacion', ubicacionRouter);
app.use('/users', usersRouter);
app.use('/vervideos', verVideosRouter);

/**
 * Testing the connection to the database and recreate the models if the tables doesn´t exists  
 */
dbManager.sequelizeConnection.authenticate()
  .then(() => {
    console.log('****Connection has been established successfully.****');
    dbManager.sequelizeConnection.sync().then(() => { // recreate the models if the tables doesn´t exists
        console.log("Database Synced");
      });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = app;