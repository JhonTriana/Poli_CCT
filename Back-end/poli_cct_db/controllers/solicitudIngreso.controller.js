const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an criterio
 * @param {*} solicitudIngresoObject JSON Object with User information
 */
async function getAllSolicitudesIngreso (req, res){
    try {
        const solicitudIngreso = await dbManager.SolicitudIngreso.findAll (); //Execute query
        res.json({ data: solicitudIngreso });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.getAllSolicitudesIngreso = getAllSolicitudesIngreso;