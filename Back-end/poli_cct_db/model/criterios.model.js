module.exports = (sequelize, Sequelize) =>{
    const criterio = sequelize.define ("criterio", {
        idCriterio:  { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idActividad: { type: Sequelize.INTEGER }, 
        idDocumento: { type: Sequelize.INTEGER }
    }, {
        tableName: "criterios"
    });    
    
    return criterio;
}