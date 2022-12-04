const express = require('express')

const router = express.Router()

router.post('/',(req, res) => {
    res.status(200).send('This is your first response!\n')
})

module.exports = router