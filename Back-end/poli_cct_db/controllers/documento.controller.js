const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an documento
 * @param {*} documentoObject JSON Object with User information
 */
async function createdocumento (req, res) {   
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newdocumentoObject = {// CREATING THE OBJECT TO PERSIST
        nombreDocumento: req.body.nombreDocumento,
        vigenciaDocumento: req.body.vigenciaDocumento
    }
    dbManager.Documento.create(newdocumentoObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get documento by id
 */
async function findOnedocumento (req, res){
    try {
        const { idDocumento } = req.params;
        const documento = await dbManager.Documento.findOne({ where: { idDocumento: idDocumento }//Execute query
        });
        res.json(documento);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update documento
 */
async function updatedocumento (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newdocumentoObject = {// CREATING THE OBJECT TO PERSIST
        nombreDocumento: req.body.nombreDocumento,
        vigenciaDocumento: req.body.vigenciaDocumento
    }
    const { idDocumento } = req.params;//Execute query
    dbManager.Documento.update(newdocumentoObject, { where: { idDocumento: idDocumento } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newdocumentoObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * Delete an existen documento by username
 * @param {*} req 
 * @param {*} res 
 */
function deletedocumentoBymessage (req, res){ 
    const { idDocumento } = req.params;//Execute query
    dbManager.Documento.destroy( { where: { idDocumento: idDocumento } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get all documentos
 */
async function findAlldocumentos (req, res){
    try {
        const documentos = await dbManager.Documento.findAll (); //Execute query
        res.json({ data: documentos });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.createdocumento = createdocumento; 
exports.findAlldocumentos = findAlldocumentos; 
exports.findOnedocumento = findOnedocumento; 
exports.updatedocumento = updatedocumento;
exports.deletedocumentoBymessage = deletedocumentoBymessage;
