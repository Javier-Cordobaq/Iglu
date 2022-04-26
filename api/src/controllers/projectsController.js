const { createProject, getAllProjects, getOneProject } = require('../service/projects')
async function createProjects (req, res) {
  const { name, description, url, images } = req.body
  try {
    const project = await createProject({ name, description, url, images })
    if (project) {
      res.status(201).json({
        message: 'Project created successfully'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error creating project',
      err: err.message
    })
  }
}
async function getProjectById (req, res) {
  const { id } = req.params
  try {
    const project = await getOneProject({ _id: id })
    if (project) {
      res.status(200).json({
        project
      })
    } else {
      res.status(400).json({
        message: 'No project found'
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error getting project',
      err: err.message
    })
  }
}

async function getAllProject (req, res) {
  try {
    const projects = await getAllProjects()
    if (projects === null) {
      res.status(400).json({
        message: 'No projects found'
      })
    } else {
      res.status(200).json({
        projects
      })
    }
  } catch (err) {
    res.status(500).json({
      message: 'Error getting projects',
      err: err.message
    })
  }
}

module.exports = {
  createProjects,
  getAllProject,
  getProjectById
}
