const { Router } = require('express')
const contact = require('./contact')
const projects = require('./projects')

const router = Router()
router.use('/contact', contact)
router.use('/project', projects)

module.exports = router
