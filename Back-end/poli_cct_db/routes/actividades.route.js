var express = require('express');
var router = express.Router();
const actividadController = require ('../controllers/actividad.controller'); 
/**
 * POST Route to create user
 */
router.post ('/', actividadController.createactividad);
/**
 * GET Route to find user by id
 */
router.get('/:idActividad', actividadController.findOneactividad);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idActividad',actividadController.updateactividad);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idActividad', actividadController.deleteactividadByactividad);
/**
 * GET Route to list all users
 */
router.get('/', actividadController.findAllactividades);

 // Export router
module.exports = router;