module.exports = (sequelize, Sequelize) =>{
    const dependencias = sequelize.define ("dependencias", {
        idDependencias:      { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idNtCC:              { type: Sequelize.INTEGER },
        idNombre:            { type: Sequelize.STRING },
        idCargo:             { type: Sequelize.STRING },
        idArea:              { type: Sequelize.STRING },
        idCelular:           { type: Sequelize.DOUBLE },
        idTelefono:          { type: Sequelize.INTEGER },
        idExtension:         { type: Sequelize.INTEGER },
        idCorreoElectronico: { type: Sequelize.STRING }
    }, {
        tableName: "dependencias"
    });    
        
    return dependencias;
}