const express = require('express');
const taskController = require('../controllers/taskController');
const validateRequest = require('../validations/middleware/validateRequest');
const { TaskValidationSchema } = require('../validations/schema/taskValidation');

const router = express.Router();

console.log('route')

router.post('/tasks', validateRequest(TaskValidationSchema), taskController.createTask);

module.exports = router;