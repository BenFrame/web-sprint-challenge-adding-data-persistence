// build your `Project` model here
const db = require('../../data/dbConfig')

function getProjects(project_id){
    return db('projects')
}

module.exports = {
    getProjects,
}