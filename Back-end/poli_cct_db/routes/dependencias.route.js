var express = require('express');
var router = express.Router();
const dependenciasController = require ('../controllers/dependencias.controller'); 

/**
 * dependencias Route to create dependencias
 */
router.post ('/', dependenciasController.createdependencias);
/**
 * GET Route to find dependencias by id
 */
router.get('/:idDependencias', dependenciasController.findOnedependencias);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idDependencias',dependenciasController.updatedependencias);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idDependencias',dependenciasController.deletedependenciasBymessage);
/**
 * GET Route to list all dependencias
 */
router.get('/', dependenciasController.findAlldependencias1);

module.exports = router;