const express = require('express')
const router = express.Router()
const { verifyErrors } = require('../middleware.js/expressValidator')
const { body } = require('express-validator')
const { createContacts, getAllContact } = require('../controllers/contactsControllers')

router.post(
  '/create-contact',
  body('name').not().isEmpty().withMessage('Name is required'),
  body('email').isEmail().normalizeEmail().withMessage('Email invalid'),
  body('message').not().isEmpty().withMessage('Message is required'),
  body('phone').not().isEmpty().withMessage('Phone is required'),
  body('interesing').not().isEmpty().withMessage('Interesting is required'),
  verifyErrors,
  createContacts
)
router.get('/get-all-contact', getAllContact)

module.exports = router
