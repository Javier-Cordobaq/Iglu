const { createContact, getAllContacts } = require('.././service/contact')

async function createContacts (req, res) {
  const { name, email, message, phone, interesing } = req.body
  try {
    const contact = await createContact({
      name,
      email,
      message,
      phone,
      interesing
    })
    if (contact) {
      res.status(201).json({
        message: 'Contact created successfully'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error creating contact',
      err: err.message
    })
  }
}

async function getAllContact (req, res) {
  try {
    const contacts = getAllContacts()
    if (contacts === null) {
      res.status(400).json({
        message: 'No contacts found'
      })
    } else {
      res.status(200).json({
        contacts
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error getting contacts',
      err: err.message
    })
  }
}

module.exports = {
  createContacts,
  getAllContact
}
