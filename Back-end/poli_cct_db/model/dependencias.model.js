module.exports = (sequelize, Sequelize) =>{
    const dependencias = sequelize.define ("dependencias", {
        idDependencias:  { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idNtCC: { type: Sequelize.INTEGER },
        idNombre: { type: Sequelize.INTEGER },
        idCargo: { type: Sequelize.INTEGER },
        idArea: { type: Sequelize.INTEGER },
        idCelular: { type: Sequelize.INTEGER },
        idTelefono: { type: Sequelize.INTEGER },
        idExtension: { type: Sequelize.INTEGER },
        idCorreoElectronico: { type: Sequelize.INTEGER }
    }, {
        tableName: "dependencias"
    });    
        
    return dependencias;
}
