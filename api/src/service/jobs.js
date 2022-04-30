const Jobs = require('../models/jobs')

async function createJob(params){
    const job = new Jobs({
        name: params.name,
        description:params.description,
    })
    return job.save()
}

async function getAllJobs(filters){
    return Jobs.find(filters)
}

async function deleteJob(filters){
    return Jobs.findOneAndDelete(filters);
}

module.exports = {
    createJob,
    getAllJobs,
    deleteJob,
}