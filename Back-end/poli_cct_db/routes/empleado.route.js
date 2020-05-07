var express = require('express');
var router = express.Router();
const empleadoController = require ('../controllers/empleado.controller'); 

/**
 * documento Route to registro empleado
 */
router.post('/', empleadoController.registroEmpleado);
/**
 * GET Route to find empleado by id
 */
router.get('/:idEmpleado', empleadoController.findOneEmpleado);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idEmpleado', empleadoController.updateEmpleado);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idEmpleado',empleadoController.deleteEmpleado);
/**
 * GET Route to list all empleados
 */
router.get('/', empleadoController.findAllempleados);

module.exports = router;