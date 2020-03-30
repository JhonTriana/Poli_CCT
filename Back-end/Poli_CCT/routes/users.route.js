var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user.controller'); 
/**
 * POST Route to create user
 */
router.post ('/',userController.createUser);
/**
 * GET Route to list all users
 */
router.get('/', userController.findAllUsers);
/**
 * GET Route to find user by id
 */
router.get('/:idUser', userController.findOneUser);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',userController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:username',userController.deleteUserByUsername);

module.exports = router;