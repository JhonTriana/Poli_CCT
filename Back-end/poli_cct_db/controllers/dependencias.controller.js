const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an dependencias
 * @param {*} dependenciasObject JSON Object with User information
 */
async function createdependencias (req, res) {   
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newdependenciasObject = {// CREATING THE OBJECT TO PERSIST
        idNtCC: req.body.idNtCC,
        idNombre: req.body.idNombre,
        idCargo: req.body.idCargo,
        idArea: req.body.idArea,
        idCelular: req.body.idCelular,
        idTelefono: req.body.idTelefono,
        idExtension: req.body.idExtension,
        idCorreoElectronico: req.body.idCorreoElectronico
    }
    dbManager.Dependencias.create(newdependenciasObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get dependencias by id
 */
async function findOnedependencias (req, res){
    try {
        const { idDependencias } = req.params;
        const dependencias = await dbManager.Dependencias.findOne({ where: { idDependencias: idDependencias }//Execute query
        });
        res.json(dependencias);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update dependencias
 */
async function updatedependencias (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newdependenciasObject = {// CREATING THE OBJECT TO PERSIST
        idNtCC: req.body.idNtCC,
        idNombre: req.body.idNombre,
        idCargo: req.body.idCargo,
        idArea: req.body.idArea,
        idCelular: req.body.idCelular,
        idTelefono: req.body.idTelefono,
        idExtension: req.body.idExtension,
        idCorreoElectronico: req.body.idCorreoElectronico
    }
    const { idDependencias } = req.params;//Execute query
    dbManager.Dependencias.update(newdependenciasObject, { where: { idDependencias: idDependencias } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newdependenciasObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * Delete an existen dependencias by username
 * @param {*} req 
 * @param {*} res 
 */
function deletedependenciasBymessage (req, res){ 
    const { idDependencias } = req.params;//Execute query
    dbManager.Dependencias.destroy( { where: { idDependencias: idDependencias } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get all dependencias1
 */
async function findAlldependencias1 (req, res){
    try {
        const dependencias1 = await dbManager.Dependencias.findAll (); //Execute query
        res.json({ data: dependencias1 });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.createdependencias = createdependencias; 
exports.findAlldependencias1 = findAlldependencias1; 
exports.findOnedependencias = findOnedependencias; 
exports.updatedependencias = updatedependencias;
exports.deletedependenciasBymessage = deletedependenciasBymessage;