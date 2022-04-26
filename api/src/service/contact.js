const Contact = require('../models/contact')

async function getAllContacts (filter) {
  return Contact.find(filter)
}

async function createContact (project) {
  const newContact = new Contact({
    name: project.name,
    description: project.description,
    url: project.url,
    images: project.images
  })
  return newContact.save()
}

module.exports = {
  getAllContacts,
  createContact
}
