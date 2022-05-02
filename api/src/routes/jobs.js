const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const { verifyErrors } = require('../middleware.js/expressValidator')
const { addJob, getJobs, deleteJobs } = require('../controllers/jobsControllers')

router.post(
  '/create-job',
  body('name').not().isEmpty().withMessage('Name is required'),
  body('description').not().isEmpty().withMessage('Description is required'),
  verifyErrors,
  addJob
)
router.get('/all-jobs', getJobs)
router.delete('/delete/:id', deleteJobs)

module.exports = router
