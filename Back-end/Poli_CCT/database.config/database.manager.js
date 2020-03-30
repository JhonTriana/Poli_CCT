//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database.config/db.connection.js');
//IMPORT MODELS
const UserModel = require("../model/user.model");
//INITIALIZE MODELS
const User = UserModel (sequelizeConnection, Sequelize);
//CREATE RELATIONS BETWEEN MODELS
//Post.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idPost' });
//GROUP MODELS
const models = {
  User: User,
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
