var express = require('express');
var router = express.Router();
const criterioController = require ('../controllers/criterio.controller'); 

/**
 * criterio Route to create criterio
 */
router.post ('/', criterioController.createcriterio);
/**
 * GET Route to find criterio by id
 */
router.get('/:idCriterio', criterioController.findOnecriterio);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idCriterio',criterioController.updatecriterio);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idCriterio',criterioController.deletecriterioBymessage);
/**
 * GET Route to list all criterios
 */
router.get('/', criterioController.findAllcriterios);

module.exports = router;