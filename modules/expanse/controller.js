let model = require('./model.js')

const GET = async (req, res) => {
	res.render('expanse.html', { expanses: await model.getExpanses() })
}

const POST = async (req, res) => {
	try {
		let data = model.insertExpanse(req.body)
		res.redirect('/expanse')
	} catch(error) {
		res.status(400).json({ message: error.message })
	}
}

const DELETE = async (req, res) => {
	try {
		let data = model.deleteExpanse(req.params)
		res.redirect('/expanse')
	} catch(error) {
		res.status(400).json({ message: error.message })
	}
}


module.exports = { GET, POST, DELETE }