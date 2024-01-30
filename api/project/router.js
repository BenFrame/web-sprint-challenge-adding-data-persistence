// build your `/api/projects` router here
const router = require('express').Router()
const helpers = require('./model')

router.get('/:project_id', (req, res, next) => {
    helpers.getProjects(req.params.project_id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(next)
})


module.exports = router