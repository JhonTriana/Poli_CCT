const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an Sede
 * @param {*} userObject JSON Object with User information
 */
async function createSede (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newSedeObject = {// CREATING THE OBJECT TO PERSIST
        nombreSede: req.body.nombreSede,
        idCiudad: req.body.idCiudad
    }
    dbManager.Sede.create(newSedeObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * GEt all users
 */
async function findAllSedes (req, res){
    try {
        const Sedes = await dbManager.Sede.findAll ();//Execute query
        res.json({ data: Sedes });//Send response
    } catch (e) {
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get user by id
 */
async function findOneSede (req, res){
    try {
        const { idSede } = req.params;//Execute query
        const Sede = await dbManager.Sede.findOne({ where: { idSede: idSede } });
        res.json(Sede);//Send response
    } catch (e) {
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update user
 */
async function updateSede (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newSedeObject = {// CREATING THE OBJECT TO PERSIST
        nombreSede: req.body.nombreSede,
        idCiudad: req.body.idCiudad
    }
    const { idSede } = req.params;//Execute query
    dbManager.Sede.update(newSedeObject, { where: { idSede: idSede } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send ( data ); }
    ).catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
async function deleteSedeBySede (req, res){ 
    const { idSede } = req.params;//Execute query
    dbManager.Sede.destroy( { where: { idSede: idSede } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {    res.status(500).send({ message: "Some error occurred" });   }
    );
    deleteAllSedes (req, res);
}
/**
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllSedes (req, res){
    dbManager.Sede.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.createSede = createSede; 
exports.findAllSedes = findAllSedes; 
exports.findOneSede = findOneSede; 
exports.updateSede = updateSede;
exports.deleteSedeBySede = deleteSedeBySede;
exports.deleteAllSedes = deleteAllSedes;