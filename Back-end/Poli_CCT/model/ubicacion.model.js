module.exports = (sequelize, Sequelize) =>{
    const ubicacion = sequelize.define ("city", {
        idCity: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        ubicacionname: { type: Sequelize.STRING } 
        
    }, {
        tableName: "ubicaciones"
    });    
    
    return ubicacion;
