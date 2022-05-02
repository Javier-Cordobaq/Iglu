const Projects = require('../models/projects')

async function getOneProject (filter) {
  return Projects.findOne(filter)
}

async function getAllProjects (filter) {
  return Projects.find(filter)
}

async function createProject (project) {
  const newProject = new Projects({
    name: project.name,
    description: project.description,
    url: project.url,
    images: project.images,
    color: project.color,
    socialNetworks: project.socialNetworks,
    type: project.type,
    client: project.client,
    logo: project.logo
  })
  return newProject.save()
}
async function deleteProject (filters) {
  return Projects.findOneAndDelete(filters)
}
module.exports = {
  getOneProject,
  getAllProjects,
  createProject,
  deleteProject
}
