require("dotenv").config()
require('path')

const express = require('express')
const cors = require('cors')

const server = express()

const port = process.env.PORT

server.use(express.json())
server.use(cors())

server.use(express.static(
	path.join(__dirname, 'client/build')
))


server.get('*', (req, res) => {
	res.sendFile(
		path.join(__dirname, 'client/build', 'index.html')
	)

})

server.get('/api/users', (req, res) => {
	res.send('<h1> Hi Im Pauline!</h1>')
})



server.use((err, req, res, next) => {
	// eslint-disable-line
	res.status(500).json({
		message: err.message,
		stack: err.stack,
	});
})

server.listen(port, () => {
	console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
