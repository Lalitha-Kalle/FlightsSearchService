const bodyParser = require("body-parser")
const express = require("express")

const { PORT } = require('./config/serverConfig')

const setupAndStartServer = async () => {
  const app = express()
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.listen(PORT, async () => {
    console.log(`Server running at ${PORT}`)

  })
}

setupAndStartServer();