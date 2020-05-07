var express = require('express');
var router = express.Router();
const regempleadoController = require ('../controllers/regempleado.controller'); 

/**
 * regempleado Route to create regempleado
 */
router.post ('/', regempleadoController.createregempleado);
/**
 * GET Route to find regempleado by id
 */
router.get('/:idRegEmpleado', regempleadoController.findOneregempleado);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idRegEmpleado',regempleadoController.updateregempleado);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idRegEmpleado',regempleadoController.deleteregempleadoBymessage);
/**
 * GET Route to list all regempleados
 */
router.get('/', regempleadoController.findAllregempleados);

module.exports = router;