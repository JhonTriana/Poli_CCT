module.exports = (sequelize, Sequelize) =>{
    const ubicacion = sequelize.define ("city", {
        idUbicacion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        nombreUbicacion: { type: Sequelize.STRING } ,
        idSede: { type: Sequelize.INTEGER }
    }, {
        tableName: "ubicaciones"
    });    
    
    return ubicacion;
}