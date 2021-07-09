console.clear()
const express = require('express')
const ejs = require('ejs')
const path = require('path')
const { PORT, host } = require('./config.js')
const app = express()

app.engine('html', ejs.renderFile)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
app.use( express.static(path.join(__dirname, 'public')) )
app.use( express.urlencoded({ extended: true }))

const modules = require('./modules')
app.use( modules )

app.listen(PORT, () => console.log('*' + PORT))