module.exports = (sequelize, Sequelize) =>{
    const verVideo = sequelize.define ("verVideo", {
        idVerVideo: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        idEmpleado: Sequelize.INTEGER,
        fechaVideo: Sequelize.DATE,
        vigencia: Sequelize.INTEGER,
        validacion: Sequelize.BOOLEAN
    }, {
        tableName: "verVideos"
    });
    return verVideo;
}