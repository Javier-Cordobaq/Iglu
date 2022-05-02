const { Router } = require('express')
const contact = require('./contact')
const projects = require('./projects')
const jobs = require('./jobs')
const admin = require('./admin')

const router = Router()
router.use('/contact', contact)
router.use('/project', projects)
router.use('/jobs', jobs)
router.use('/admin', admin)
module.exports = router
