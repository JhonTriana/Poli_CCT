//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');
//IMPORT MODELS
const ActividadModel = require("../model/actividades.model");
const CiudadModel    = require("../model/ciudad.model");
const CriterioModel  = require("../model/criterios.model");
const DependenciasModel = require("../model/dependencias.model");
const DocumentoModel = require("../model/documentos.model");
const EmpleadoModel = require("../model/empleado.model");
const RegEmpleadoModel = require("../model/regempleado.model");
const SedeModel = require("../model/sede.model");
const UbicacionModel = require("../model/ubicacion.model");
const UserModel = require("../model/user.model");
const VerVideoModel = require("../model/verVideo.model");
//INITIALIZE MODELS
const Actividad = ActividadModel (sequelizeConnection, Sequelize);
const Ciudad = CiudadModel (sequelizeConnection, Sequelize);
const Criterio = CriterioModel (sequelizeConnection, Sequelize);
const Dependencias = DependenciasModel (sequelizeConnection,Sequelize);
const Documento = DocumentoModel (sequelizeConnection, Sequelize);
const Empleado = EmpleadoModel (sequelizeConnection,Sequelize);
const RegEmpleado = RegEmpleadoModel (sequelizeConnection,Sequelize);
const Sede = SedeModel (sequelizeConnection,Sequelize);
const Ubicacion = UbicacionModel (sequelizeConnection,Sequelize);
const User = UserModel (sequelizeConnection, Sequelize);
const VerVideo = VerVideoModel (sequelizeConnection, Sequelize);
//CREATE RELATIONS BETWEEN MODELS
//Criterio.hasMany(Actividad   , { foreignKey: 'idActividad', sourceKey: 'idActividad' });
//Actividad.belongsTo(Criterio , { foreignKey: 'idActividad', sourceKey: 'idActividad' });
//Criterio.hasMany(Documento   , { foreignKey: 'idDocumento', sourceKey: 'idDocumento' });
//Documento.belongsTo(Criterio , { foreignKey: 'idDocumento', sourceKey: 'idDocumento' });

//GROUP MODELS
const models = {
  Ciudad: Ciudad,
  Actividad: Actividad,
  Criterio: Criterio,
  Dependencias : Dependencias,
  Documento: Documento,
  Empleado : Empleado,
  RegEmpleado : RegEmpleado,
  Sede: Sede,
  Ubicacion: Ubicacion,
  User: User,
  VerVideo: VerVideo
};
/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
// EXPORT CONSTANT DB
module.exports = db;