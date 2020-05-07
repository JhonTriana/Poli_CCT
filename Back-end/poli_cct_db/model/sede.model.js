module.exports = (sequelize, Sequelize) =>{
    const sede = sequelize.define ("sede", {
        idSede: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        idID: { type: Sequelize.INTEGER }, 
        idLugarEjecucion: { type: Sequelize.INTEGER },
        idIDSede: { type: Sequelize.INTEGER }

    }, {
        tableName: "sedes"
    });    
    
    return sede;
}