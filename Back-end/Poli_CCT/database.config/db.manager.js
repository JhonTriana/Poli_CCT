//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');
//IMPORT MODELS
const UserModel = require("../model/user.model");
const ActividadModel = require("../model/actividades.model");
const CriterioModel = require("../model/criterios.model");
const VerVideoModel = require("../model/verVideo.model");
const DocumentoModel = require("../model/documentos.model");
const EmpleadoModel = require("../model/empleado.model");
const RegEmpleadoModel = require("../model/regempleado.model");
//INITIALIZE MODELS
const User = UserModel (sequelizeConnection, Sequelize);
const Actividad = ActividadModel (sequelizeConnection, Sequelize);
const Criterio = CriterioModel (sequelizeConnection, Sequelize);
const VerVideo = VerVideoModel (sequelizeConnection, Sequelize);
const Documento = DocumentoModel (sequelizeConnection, Sequelize);
const Empleado = EmpleadoModel (sequelizeConnection,Sequelize);
const RegEmpleado = RegEmpleadoModel (sequelizeConnection,Sequelize);


//CREATE RELATIONS BETWEEN MODELS
//Post.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idPost' });
//GROUP MODELS
const models = {
  User: User,
  Actividad: Actividad,
  Criterio: Criterio,
  VerVideo: VerVideo,
  Documento: Documento,
  Empleado : Empleado,
  RegEmpleado : RegEmpleado
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
