const express = require('express')
const router = express.Router()
const { verifyErrors } = require('../middleware.js/expressValidator')
const { body } = require('express-validator')
const {adminLogin} = require('../controllers/adminControllers')

router.post('/admin-login',
    body('user').isEmail().normalizeEmail().withMessage('User invalid'),
    body('password').not().isEmpty().withMessage('password is required'),
    verifyErrors,
    adminLogin
)

module.exports = router