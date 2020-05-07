var express = require('express');
var router = express.Router();
const ubicacionesController = require ('../controllers/ubicacion.controller'); 

/**
 * GET Route to list all ubicacioness
 */
router.get('/', ubicacionesController.findAllubicaciones);
/**
 * GET Route to find ubicaciones by id
 */
router.get('/:idubicaciones', ubicacionesController.findOneubicaciones);
/**
 * ubicaciones Route to create ubicaciones
 */
router.post ('/', ubicacionesController.createubicacion);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idubicaciones',ubicacionesController.updateubicaciones);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:message',ubicacionesController.deleteubicacionesByubicaciones);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',ubicacionesController.deleteAllubicacioness);

module.exports = router;