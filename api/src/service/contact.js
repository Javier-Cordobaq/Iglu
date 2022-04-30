const Contact = require('../models/contact')

async function getAllContacts (filter) {
  return Contact.find(filter)
}

async function createContact (contact) {
  const newContact = new Contact({
    name: contact.name,
    email: contact.email,
    message: contact.message,
    phone: contact.phone,
    interesing: contact.interesing
  })
  return newContact.save()
}

module.exports = {
  getAllContacts,
  createContact
}
