const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { verifyErrors } = require('../middleware.js/expressValidator')
const { createProjects, getAllProject, getProjectById } = require('../controllers/projectsController')
router.post(
  '/create-project',
  body('name').not().isEmpty().withMessage('Name is required'),
  body('url').not().isEmpty().withMessage('Network is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
  verifyErrors,
  createProjects
)
router.get('/projects', getAllProject)
router.get('/projects/:id', getProjectById)

module.exports = router
