const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an regempleado
 * @param {*} regempleadoObject JSON Object with User information
 */
async function createregempleado (req, res) {   
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newregempleadoObject = {// CREATING THE OBJECT TO PERSIST
        idNombre: req.body.idNombre,
        idEmail: req.body.idEmail,
        idTelefono: req.body.idTelefono,
        idDireccion: req.body.idDireccion,
        idID: req.body.idID,

    }
    dbManager.RegEmpleado.create(newregempleadoObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get regempleado by id
 */
async function findOneregempleado (req, res){
    try {
        const { idRegEmpleado } = req.params;
        const regempleado = await dbManager.RegEmpleado.findOne({ where: { idRegEmpleado: idRegEmpleado }//Execute query
        });
        res.json(regempleado);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update regempleado
 */
async function updateregempleado (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newregempleadoObject = {// CREATING THE OBJECT TO PERSIST
        idNombre: req.body.idNombre,
        idEmail: req.body.idEmail,
        idTelefono: req.body.idTelefono,
        idDireccion: req.body.idDireccion,
        idID: req.body.idID
    }
    const { idRegEmpleado } = req.params;//Execute query
    dbManager.RegEmpleado.update(newregempleadoObject, { where: { idRegEmpleado: idRegEmpleado } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newregempleadoObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * Delete an existen regempleado by username
 * @param {*} req 
 * @param {*} res 
 */
function deleteregempleadoBymessage (req, res){ 
    const { idRegEmpleado } = req.params;//Execute query
    dbManager.RegEmpleado.destroy( { where: { idRegEmpleado: idRegEmpleado } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get all regempleados
 */
async function findAllregempleados (req, res){
    try {
        const regempleados = await dbManager.RegEmpleado.findAll (); //Execute query
        res.json({ data: regempleados });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.createregempleado = createregempleado; 
exports.findAllregempleados = findAllregempleados; 
exports.findOneregempleado = findOneregempleado; 
exports.updateregempleado = updateregempleado;
exports.deleteregempleadoBymessage = deleteregempleadoBymessage;
