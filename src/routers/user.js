const express = require('express')
//We are creating an instance of router using express 

const router = new express.Router()

router.get('/test', (req, res) => {
    res.send('From a new file')
})

module.exports = router 