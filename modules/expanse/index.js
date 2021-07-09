const router = require('express').Router()
const { GET, POST, DELETE } = require('./controller.js')

router.route('/expanse')
	.get( GET )
	.post( POST )

router.route('/expanse/delete/:expanseId')
	.get( DELETE )

module.exports = router