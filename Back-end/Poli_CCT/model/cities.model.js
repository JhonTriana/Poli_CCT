module.exports = (sequelize, Sequelize) =>{
    const city = sequelize.define ("city", {
        idCity: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        cityname: { type: Sequelize.STRING } 
        
    }, {
        tableName: "cities"
    });    
    
    return city;
}
