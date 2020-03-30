/**
 * Database Configuration Object
 */
const dbconfig = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "",
        DB: "poli_cct_db",
        dialect: "mysql",
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
        }
};
module.exports = dbconfig;
