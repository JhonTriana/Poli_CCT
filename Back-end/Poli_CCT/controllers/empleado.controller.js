const dbManager = require ('../database.config/db.manager');
/**
 * Creation of an documento
 * @param {*} empleadoObject JSON Object with User information
 */
async function registroEmpleado (req, res) {   
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newempleadoObject = {// CREATING THE OBJECT TO PERSIST
        nombreEmpleado: req.body.nombreEmpleado,
        identificacion : req.body.identificacion,
        direccion : req.body.direccion,
        telefono : req.body.telefono,
        cargo : req.body.cargo,
        contacto : req.body.contacto,
        numero_contacto: req.body.numero_contacto,
        mail: req.body.mail,
        idContratista : req.body.idContratista
        
    }
   
    dbManager.Empleado.create(newempleadoObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
    

}
/**
 * Get empleado by id
 */
async function findOneEmpleado (req, res){
    try {
        const { idEmpleado } = req.params;
        const empleado = await dbManager.Empleado.findOne({ where: { idEmpleado: idEmpleado }//Execute query
        });
        res.json(empleado);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update empleado
 */
async function updateEmpleado (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newempleadoObject = {// CREATING THE OBJECT TO PERSIST
        nombreEmpleado: req.body.nombreEmpleado
    }
    const { idEmpleado } = req.params;//Execute query
    dbManager.Empleado.update(newempleadoObject, { where: { idEmpleado: idEmpleado } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newempleadoObject); }
    ).catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

/**
 * Delete an existen empleado by username
 * @param {*} req 
 * @param {*} res 
 */
function deleteEmpleado (req, res){ 
    const { idEmpleado } = req.params;//Execute query
    dbManager.Empelado.destroy( { where: { idEmpleado: idEmpleado } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {
            console.log(e);// Print error on console
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get all empleados
 */
async function findAllempleados (req, res){
    try {
        const empleados = await dbManager.Empleado.findAll (); //Execute query
        res.json({ data: empleados });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.registroEmpleado = registroEmpleado; 
exports.findAllempleados  = findAllempleados ; 
exports.findOneEmpleado  = findOneEmpleado ; 
exports.updateEmpleado = updateEmpleado;
exports.deleteEmpleado = deleteEmpleado;