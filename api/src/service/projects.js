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
    images: project.images
  })
  return newProject.save()
}

module.exports = {
  getOneProject,
  getAllProjects,
  createProject
}
