module.exports = (sequelize, Sequelize) =>{
    const sede = sequelize.define ("sede", {
        idSede: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        nombreSede: { type: Sequelize.STRING },
        idCiudad: { type: Sequelize.INTEGER }
    }, {
        tableName: "sedes"
    });    
    
    return sede;
}