const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an cities
 * @param {*} userObject JSON Object with User information
 */
async function createcities (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newcitiesObject = {// CREATING THE OBJECT TO PERSIST
        ciudadname: req.body.ciudadname 
    }
    dbManager.Ciudad.create(newcitiesObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function findAllcities (req, res){
    try {
        const cities = await dbManager.Ciudad.findAll();//Execute query
        res.json({ data: cities });//Send response
    } catch (e) {
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get user by id
 */
async function findOnecities (req, res){
    try {
        const { idCiudad } = req.params;//Execute query
        const cities = await dbManager.Ciudad.findOne({ where: { idCiudad: idCiudad } });
        res.json(cities);//Send response
    } catch (e) {
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Update user
 */
async function updatecities (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newcitiesObject = {// CREATING THE OBJECT TO PERSIST
        ciudadname: req.body.ciudadname
    }
    const { idCiudad } = req.params;//Execute query
    dbManager.Ciudad.update(newcitiesObject, { where: { idCiudad: idCiudad } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function deletecitiesBycities (req, res){ 
    const { idCiudad } = req.params;//Execute query
    dbManager.Ciudad.destroy( { where: { idCiudad: idCiudad } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        //data => { res.send (data); }
    .catch (
        e => {   res.status(500).send({ message: "Some error occurred" });   }
    );
    findAllcities (req, res);
}
/**
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllcitiess (req, res){
    dbManager.Ciudad.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
        }
    );
}

exports.createcities = createcities; 
exports.findAllcities = findAllcities; 
exports.findOnecities = findOnecities; 
exports.updatecities = updatecities;
exports.deletecitiesBycities = deletecitiesBycities;
exports.deleteAllcitiess = deleteAllcitiess;