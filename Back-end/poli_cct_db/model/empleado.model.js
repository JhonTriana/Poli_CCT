module.exports = (sequelize, Sequelize) =>{
    const empleado = sequelize.define ("empleado", {
        idEmpleado: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        nombreEmpleado: Sequelize.STRING,
        identificacion : Sequelize.DOUBLE,
        direccion : Sequelize.STRING,
        telefono : Sequelize.DOUBLE,
        cargo : Sequelize.STRING,
        contacto : Sequelize.STRING,
        numero_contacto: Sequelize.DOUBLE,
        mail: Sequelize.STRING,
        idContratista : Sequelize.INTEGER
    }, {
        tableName: "Empleado"
    });
    return empleado;
}