const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { verifyErrors } = require('../middleware.js/expressValidator')
const { createProjects, getAllProject, getProjectById, getAllProjectByType, deleteProj, getAllProjectByClient } = require('../controllers/projectsController')
router.post(
  '/create-project',
  body('name').not().isEmpty().withMessage('Name is required'),
  body('url').not().isEmpty().withMessage('Url is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
  verifyErrors,
  createProjects
)
router.get('/all-projects', getAllProject)
router.get('/id/:id', getProjectById)
router.get('/type/:type', getAllProjectByType)
router.delete('/delete/:id', deleteProj)
router.get('/client/:client', getAllProjectByClient)
module.exports = router
