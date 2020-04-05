var express = require('express');
var router = express.Router();
const sedeController = require ('../controllers/sede.controller'); 

/**
 * sede Route to create sede
 */
router.post ('/', sedeController.createSede);
/**
 * GET Route to find sede by id
 */
router.get('/:idSede', sedeController.findOneSede);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idSede',sedeController.updateSede);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idSede',sedeController.deleteSedeBySede);
/**
 * GET Route to list all sedes
 */
router.get('/', sedeController.findAllSedes);

module.exports = router;
