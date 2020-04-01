const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an verVideo
 * @param {*} userObject JSON Object with User information
 */
async function createverVideo (req, res) {      
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newverVideoObject = {// CREATING THE OBJECT TO PERSIST
        idEmpleado : req.body.idEmpleado,
        fechaVideo : req.body.fechaVideo,
        vigencia : req.body.vigencia,
        validacion : req.body.validacion
    }
    dbManager.VerVideo.create(newverVideoObject).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
async function findAllverVideos (req, res){
    try {
        const verVideos = await dbManager.VerVideo.findAll ();//Execute query
        res.json({ data: verVideos });//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({ message: "Some error occurred" });// Send error message as a response 
    }
}

exports.createverVideo = createverVideo; 
exports.findAllverVideos = findAllverVideos; 
