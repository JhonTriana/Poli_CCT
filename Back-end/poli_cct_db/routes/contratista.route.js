var express = require('express');
var router = express.Router();
const contratistaController = require ('../controllers/contratista.controller'); 
/**
 * POST Route to create user
 */
router.post ('/', contratistaController.crearContratista);
/**
 * GET Route to find user by id
 */
router.get('/:idRegistro', contratistaController.buscarUnContratista);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idRegistro',contratistaController.editarContratista);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idRegistro', contratistaController.borrarContratista);
/**
 * GET Route to list all users
 */
router.get('/', contratistaController.buscarTodosContratista);

 // Export router
module.exports = router;