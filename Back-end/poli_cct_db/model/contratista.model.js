module.exports = (sequelize, Sequelize) =>{
    const contratista = sequelize.define ("contratista", {
        idRegistro:  { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        ntCcRegistro: { type: Sequelize.INTEGER },
        nombreRegistro: { type: Sequelize.STRING },
        direccionRegistro: { type: Sequelize.STRING },
        idCiudad: { type: Sequelize.INTEGER },
        telefonoRegistro: { type: Sequelize.DOUBLE },
        celularRegistro: { type: Sequelize.DOUBLE },
    }, {
        tableName: "contratistas"
    });    
    
    return contratista;
}