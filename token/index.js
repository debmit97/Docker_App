const express = require('express')
const router = express.Router()

const { validator } = require('./controller')

router.route('/').get(validator);

module.exports = router