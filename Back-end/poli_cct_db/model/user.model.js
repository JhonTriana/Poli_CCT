module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define ("User", {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        documentoUser: Sequelize.INTEGER,
        userName: Sequelize.STRING,
        userType: Sequelize.STRING
    }, {
        tableName: "users"
    });    
    
    return User;
}
