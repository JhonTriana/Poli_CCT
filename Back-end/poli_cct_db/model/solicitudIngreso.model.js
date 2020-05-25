module.exports = (sequelize, Sequelize) =>{
    const solicitudIngreso = sequelize.define ("solicitud_ingreso", {
        idSolicitudIngreso: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idEmpleado: Sequelize.INTEGER,
        idDocumento: Sequelize.INTEGER,
        ruta: Sequelize.STRING
    }, {
        tableName: "solicitud_ingreso"
    });    
    
    return solicitudIngreso;
}