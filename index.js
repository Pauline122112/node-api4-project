
require("dotenv").config()
const express = require('express')
const cors = require('cors')

const server = express()

const port = process.env.PORT

server.use(express.json())
server.use(cors())


server.get('/', (req, res) => {
	res.json({message: 'Pauline is awesome'})

})

server.get('/hello', (req, res) => {
	res.send('<h1> Hi Im Pauline!</h1>')
})


server.use("*", (req, res) => {
	res.send(`<h1>Project 4-Deployment</h1>`)
});


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
