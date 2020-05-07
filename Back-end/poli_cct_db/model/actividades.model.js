module.exports = (sequelize, Sequelize) =>{
    const actividad = sequelize.define ("actividad", {
        idActividad: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        nombreActividad: Sequelize.STRING
    }, {
        tableName: "actividades"
    });
    return actividad;
}
