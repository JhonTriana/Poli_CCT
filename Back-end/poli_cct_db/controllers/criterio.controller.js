const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an criterio
 * @param {*} criterioObject JSON Object with User information
 */
async function createcriterio (req, res) {   
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newcriterioObject = {// CREATING THE OBJECT TO PERSIST
        idActividad: req.body.idActividad,
        idDocumento: req.body.idDocumento
    }
    dbManager.Criterio.create(newcriterioObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get criterio by id
 */
async function findOnecriterio (req, res){
    try {
        const { idCriterio } = req.params;
        const criterio = await dbManager.Criterio.findOne({ where: { idCriterio: idCriterio }//Execute query
        });
        res.json(criterio);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update criterio
 */
async function updatecriterio (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newcriterioObject = {// CREATING THE OBJECT TO PERSIST
        idActividad: req.body.idActividad,
        idDocumento: req.body.idDocumento
    }
    const { idCriterio } = req.params;//Execute query
    dbManager.Criterio.update(newcriterioObject, { where: { idCriterio: idCriterio } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newcriterioObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * Delete an existen criterio by username
 * @param {*} req 
 * @param {*} res 
 */
function deletecriterioBymessage (req, res){ 
    const { idCriterio } = req.params;//Execute query
    dbManager.Criterio.destroy( { where: { idCriterio: idCriterio } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get all criterios
 */
async function findAllcriterios (req, res){
    try {
        const criterios = await dbManager.Criterio.findAll (); //Execute query
        res.json({ data: criterios });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.createcriterio = createcriterio; 
exports.findAllcriterios = findAllcriterios; 
exports.findOnecriterio = findOnecriterio; 
exports.updatecriterio = updatecriterio;
exports.deletecriterioBymessage = deletecriterioBymessage;
