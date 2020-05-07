module.exports = (sequelize, Sequelize) =>{
    const empleado = sequelize.define ("empleado", {
        idEmpleado: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        nombreEmpleado: Sequelize.STRING,
        identificacion : Sequelize.INTEGER,
        direccion : Sequelize.STRING,
        telefono : Sequelize.INTEGER,
        cargo : Sequelize.STRING,
        contacto : Sequelize.STRING,
        numero_contacto: Sequelize.INTEGER,
        mail: Sequelize.STRING,
        idContratista : Sequelize.INTEGER

    }, {
        tableName: "Empleado"
    });
    return empleado;
}