var express = require('express');
var router = express.Router();
const documentoController = require ('../controllers/documento.controller'); 

/**
 * documento Route to create documento
 */
router.post ('/', documentoController.createdocumento);
/**
 * GET Route to find documento by id
 */
router.get('/:idDocumento', documentoController.findOnedocumento);
/**
 * PUT Route to update an user by id
 */
router.put ('/:idDocumento',documentoController.updatedocumento);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:idDocumento',documentoController.deletedocumentoBymessage);
/**
 * GET Route to list all documentos
 */
router.get('/', documentoController.findAlldocumentos);

module.exports = router;