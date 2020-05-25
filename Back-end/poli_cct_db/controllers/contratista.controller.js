const dbManager = require ('../database.config/db.manager');

/**
 * Crear contratista
 * @param {*} userObject JSON Object with User information
 */
async function crearContratista (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoContratista = {// CREATING THE OBJECT TO PERSIST
        ntCcRegistro: req.body.ntCcRegistro,
        nombreRegistro: req.body.nombreRegistro,
        direccionRegistro: req.body.direccionRegistro,
        idCiudad: req.body.idCiudad,
        telefonoRegistro: req.body.telefonoRegistro,
        celularRegistro: req.body.celularRegistro
    }
    dbManager.Contratista.create(nuevoContratista).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (data); }
    ).catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}
/**
 * Get user by id
 */
async function buscarUnContratista (req, res){
    try {
        const { idRegistro } = req.params;//Execute query
        const contratista = await dbManager.Contratista.findOne({ where: { idRegistro: idRegistro } });
        res.json(contratista);//Send response
    } catch (e) {
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Editar Contratista
 */
async function editarContratista (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const nuevoContratista = {// CREATING THE OBJECT TO PERSIST
        idRegistro: req.body.idRegistro,
        ntCcRegistro: req.body.ntCcRegistro,
        nombreRegistro: req.body.nombreRegistro,
        direccionRegistro: req.body.direccionRegistro,
        idCiudad: req.body.idCiudad,
        telefonoRegistro: req.body.telefonoRegistro,
        celularRegistro: req.body.celularRegistro
    }
    const { idRegistro } = req.params;//Execute query
    dbManager.Contratista.update(nuevoContratista, { where: { idRegistro: idRegistro } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function borrarContratista (req, res){ 
    const { idRegistro } = req.params;//Execute query
    dbManager.Contratista.destroy( { where: { idRegistro: idRegistro } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {   res.status(500).send({ message: "Some error occurred" });   }
    );
    buscarTodosContratista (req, res);
}
/**
 * @param {*} req 
 * @param {*} res 
 */
/**
 * GEt all users
 */
async function buscarTodosContratista (req, res){
    try {
        const contratista = await dbManager.Contratista.findAll();//Execute query
        res.json({ data: contratista });//Send response
    } catch (e) {
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.crearContratista = crearContratista; 
exports.buscarTodosContratista = buscarTodosContratista; 
exports.buscarUnContratista = buscarUnContratista; 
exports.editarContratista = editarContratista;
exports.borrarContratista = borrarContratista;