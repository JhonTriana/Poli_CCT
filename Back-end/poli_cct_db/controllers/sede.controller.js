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
        Sedename: req.body.Sedename,
        creation_date: req.body.creation_date,
        idUser: req.body.idUser
    }
    dbManager.Sede.create(newSedeObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function findAllSedes (req, res){
    try {
        const Sedes = await dbManager.Sede.findAll ();//Execute query
        res.json({ data: Sedes });//Send response
    } catch (e) {
        console.log(e);// Print error on console
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
        console.log(e);// Print error on console
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
        Sedename: req.body.Sedename,
        creation_date: req.body.creation_dater,
        idUser: req.body.idUser
    }
    const { idSede } = req.params;//Execute query
    console.log("Sede: " + idSede);
    dbManager.Sede.update(newSedeObject, { where: { idSede: idSede } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newSedeObject); }
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
function deleteSedeBySede (req, res){ 
    const { Sede } = req.params;//Execute query
    dbManager.Sede.destroy( { where: { Sedename: Sede } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
function deleteAllSedes (req, res){
    dbManager.Sede.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            console.log(e);// Print error on console
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