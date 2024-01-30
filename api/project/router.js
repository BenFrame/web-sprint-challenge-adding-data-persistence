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


module.exports = router