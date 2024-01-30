// build your `/api/resources` router here
const router = require('express').Router()
const helpers = require('./model.js')

router.get('/', (req, res, next) => {
    
    helpers.getResources()
    .then(resources => {
        console.log(resources)
        res.json(resources)
        
    })
    .catch(next)
})


module.exports = router