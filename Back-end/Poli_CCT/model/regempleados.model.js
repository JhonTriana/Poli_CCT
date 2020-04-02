module.exports = (sequelize, Sequelize) =>{
    const regempleado = sequelize.define ("regempleado", {
        idRegEmpleado:  { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idNombre: { type: Sequelize.INTEGER },
        idEmail: { type: Sequelize.INTEGER }, 
        idTelefono: { type: Sequelize.INTEGER },
        idDireccion: { type: Sequelize.INTEGER },
        idID: { type: Sequelize.INTEGER }
    }, {
        tableName: "regempleados"
    });    
    
    return regempleado;
}
