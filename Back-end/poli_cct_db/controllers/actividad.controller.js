const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an actividad
 * @param {*} userObject JSON Object with User information
 */
async function createactividad (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newactividadObject = {// CREATING THE OBJECT TO PERSIST
        nombreActividad: req.body.nombreActividad,
    }
    dbManager.Actividad.create(newactividadObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get user by id
 */
async function findOneactividad (req, res){
    try {
        const { idActividad } = req.params;//Execute query
        const actividad = await dbManager.Actividad.findOne({ where: { idActividad: idActividad } });
        res.json(actividad);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update user
 */
async function updateactividad (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newactividadObject = {// CREATING THE OBJECT TO PERSIST
        nombreActividad: req.body.nombreActividad,
    }
    const { idActividad } = req.params;//Execute query
    dbManager.Actividad.update(newactividadObject, { where: { idActividad: idActividad } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newactividadObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
function deleteactividadByactividad (req, res){ 
    const { idActividad } = req.params;//Execute query
    dbManager.Actividad.destroy( { where: { idActividad: idActividad } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * @param {*} req 
 * @param {*} res 
 */
/**
 * GEt all users
 */
async function findAllactividades (req, res){
    try {
        const actividades = await dbManager.Actividad.findAll ();//Execute query
        res.json({ data: actividades });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.createactividad = createactividad; 
exports.findAllactividades = findAllactividades; 
exports.findOneactividad = findOneactividad; 
exports.updateactividad = updateactividad;
exports.deleteactividadByactividad = deleteactividadByactividad;
