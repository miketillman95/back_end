const express = require("express")
const cors = require("cors")
const helmet = require("helmet")

const authRouter = require('./auth/auth-router')
const recipesRouter = require('./recipes/recipes-router')

const server = express()

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/auth', authRouter)
server.use('/api/recipes', recipesRouter);

server.get("/",(req, res) =>{
    res.json({yodaSays:"Server up it is"})
})
module.exports = server;



