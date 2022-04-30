const { createJob, getAllJobs, deleteJob } = require('../service/jobs')

async function addJob(req, res) {
    const { name, description } = req.body;
    try {
        const job = await createJob({ name, description })
        if (job === null) {
            res.status(400).json({
                message: 'Error in create'
            })
        } else {
            res.status(200).json({
                message: 'job created'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'error',
            error: err.message
        })
    }

}

async function getJobs(req, res) {
    try {
        const job = await getAllJobs()
        if (job === null) {
            res.status(400).json({
                message: 'No job found'
            })
        } else {
            res.status(200).json({
                job
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Error getting job',
            err: err.message
        })
    }
}

async function deleteJobs(req, res){
    const { id } = req.params;
    try{
        await deleteJob({_id : id })
        res.status(200).json({
          message:"Job delete"
        })
    }catch(err){
      res.status(500).json({
        message: 'Error delete job',
        err: err.message
      })
    }
}
module.exports = {
    addJob,
    getJobs,
    deleteJobs

}