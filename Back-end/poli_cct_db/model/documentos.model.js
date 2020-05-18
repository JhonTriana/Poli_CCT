module.exports = (sequelize, Sequelize) =>{
    const documento = sequelize.define ("documento", {
        idDocumento: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        nombreDocumento: Sequelize.STRING,
        vigenciaDocumento: Sequelize.INTEGER
    }, {
        tableName: "documentos"
    });    
    
    return documento;
}