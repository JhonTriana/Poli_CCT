// IMPORT CONFIG
const dbConfig = require("../database.config/db.config.js");
// IMPORT SEQUALIZE
const Sequelize = require("sequelize");
// CREATE A CONNECTION
const sequelizeConnection = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
// EXPORT THE CONNECTION
module.exports = sequelizeConnection;