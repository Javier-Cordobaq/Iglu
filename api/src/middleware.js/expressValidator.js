const { validationResult } = require('express-validator')

async function verifyErrors (req, res, next) {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }
  next()
  return false
}

module.exports = {
  verifyErrors
}
