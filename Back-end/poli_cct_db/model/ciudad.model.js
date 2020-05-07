module.exports = (sequelize, Sequelize) =>{
    const ciudad = sequelize.define ("ciudad", {
        idCiudad: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        ciudadname: { type: Sequelize.STRING } 
    }, {
        tableName: "ciudades"
    });    
    return ciudad;
}
