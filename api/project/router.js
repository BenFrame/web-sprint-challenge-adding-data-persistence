// build your `/api/projects` router here
const router = require('express').Router()
const projects = require('./model')

router.get('/', (req, res, next) => {
    projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})


module.exports = router