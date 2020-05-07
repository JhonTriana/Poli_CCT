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
        citiesname: req.body.cities
    }
    dbManager.cities.create(newcitiesObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function findAllcities (req, res){
    try {
        const citiess = await dbManager.cities.findAll ();//Execute query
        res.json({ data: citiess });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}
/**
 * Get user by id
 */
async function findOnecities (req, res){
    try {
        const { idcities } = req.params;//Execute query
        const cities = await dbManager.cities.findOne({ where: { idcities: idcities } });
        res.json(cities);//Send response
    } catch (e) {
        console.log(e);// Print error on console
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
        citiesname: req.body.citiesname
    }
    const { idcities } = req.params;//Execute query
    console.log("cities: " + idcities);
    dbManager.cities.update(newcitiesObject, { where: { idcities: idcities } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newcitiesObject); }
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
function deletecitiesBycities (req, res){ 
    const { cities } = req.params;//Execute query
    dbManager.cities.destroy( { where: { citiesname: cities } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
function deleteAllcitiess (req, res){
    dbManager.cities.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
    .catch (
        e => {
            console.log(e);// Print error on console
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