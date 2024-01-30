// build your `/api/projects` router here
const router = require('express').Router()
const helpers = require('./model.js')

router.get('/', (req, res, next) => {
    
    helpers.getProjects()
    .then(projects => {
        console.log(projects)
        res.json(projects)
        
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    helpers.postProject(req.body)
        .then(project => {
            res.json(project)
        })
        .catch(next)
})


module.exports = router