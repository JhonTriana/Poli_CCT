const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an ubicaciones
 * @param {*} userObject JSON Object with User information
 */
async function createubicacion (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newubicacionesObject = {// CREATING THE OBJECT TO PERSIST
        ubicacionname: req.body.ubicaciones
    }
    dbManager.ubicaciones.create(newubicacionesObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * GEt all users
 */
async function findAllubicaciones (req, res){
    try {
        const ubicaciones = await dbManager.ubicaciones.findAll ();//Execute query
        res.json({ data: ubicaciones });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get user by id
 */
async function findOneubicaciones (req, res){
    try {
        const { idubicaciones } = req.params;//Execute query
        const ubicaciones = await dbManager.ubicaciones.findOne({ where: { idubicaciones: idubicaciones } });
        res.json(ubicaciones);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update user
 */
async function updateubicaciones (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newubicacionesObject = {// CREATING THE OBJECT TO PERSIST
        ubicacionesname: req.body.ubicacionesname
    }
    const { idubicaciones } = req.params;//Execute query
    console.log("ubicaciones: " + idubicaciones);
    dbManager.ubicaciones.update(newubicacionesObject, { where: { idubicaciones: idubicaciones } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newubicacionesObject); }
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
function deleteubicacionesByubicaciones (req, res){ 
    const { ubicaciones } = req.params;//Execute query
    dbManager.ubicaciones.destroy( { where: { ubicacionesname: ubicaciones } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
function deleteAllubicacioness (req, res){
    dbManager.ubicaciones.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.createubicacion = createubicacion; 
exports.findAllubicaciones = findAllubicaciones; 
exports.findOneubicaciones = findOneubicaciones; 
exports.updateubicaciones = updateubicaciones;
exports.deleteubicacionesByubicaciones = deleteubicacionesByubicaciones;
exports.deleteAllubicacioness = deleteAllubicacioness;