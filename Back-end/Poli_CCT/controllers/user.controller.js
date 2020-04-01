const dbManager = require ('../database.config/db.manager');

/**
 * Creation of an user
 * @param {*} userObject JSON Object with User information
 */
async function createUser (req, res) {
       // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }
    
    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {
        idUser: req.body.idUser,
        userName: req.body.userName,
        userType: req.body.userType
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * GEt all users
 */
async function findAllUsers (req, res){
    try {const users = await dbManager.User.findAll ();//Execute query
        res.json({data: users});//Send response

    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({message: "Some error occurred"});// Send error message as a response
    }
}

/**
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;//Execute query
        const user = await dbManager.User.findOne({ where: { idUser: idUser } });
        res.json(user);//Send response
    } catch (e) {
        console.log(e);// Print error on console
        res.status(500).send({message: "Some error occurred"});// Send error message as a response 
    }
}

/**
 * Update user
 */
async function updateUser (req, res){
    if (!req.body) {// CHECK IF THE REQUEST BODY IS EMPTY
        res.status(400).send({ message: "Request body is empty!!!!" });
        return;
    }
    const newUserObject = {// CREATING THE OBJECT TO PERSIST
        idUser: req.body.idUser,
        userName: req.body.userName,
        userType: req.body.userType
    }
    const { idUser } = req.params;//Execute query
    dbManager.User.update(newUserObject, { where: { idUser: idUser } }).then (// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
        data => { res.send (newUserObject); }
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
function deleteUserByidUser (req, res){ 
    const { idUser } = req.params;//Execute query
    dbManager.User.destroy( { where: { idUser: idUser } })// EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
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
function deleteAllUsers (req, res){
    dbManager.User.destroy( { where: {} } )// EXECUTING THE DESTROY QUERY - INSERT THE OBJECT INTO DATABASE 
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

exports.createUser = createUser; 
exports.findAllUsers = findAllUsers; 
exports.findOneUser = findOneUser; 
exports.updateUser = updateUser;
exports.deleteUserByidUser = deleteUserByidUser;
exports.deleteAllUsers = deleteAllUsers;
