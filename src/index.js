const bodyParser = require("body-parser")
const express = require("express")

const { PORT } = require('./config/serverConfig')
const ApiRoutes = require('./routes/index')

const db = require("./models/index")
const { City, airport} = require('./models/index')
const { Airplane } = require("./models/index")


const setupAndStartServer = async () => {
  const app = express()


  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({extended: true}))

  app.use("/api", ApiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server running at ${PORT}`)

    // const airports = await airport.findAll({
    //   include: City
    // })
    // console.log(airports)
    if(process.env.SYNC_DB) {
      db.sequelize.sync({alter: true})
    }
    
      // const city = await City.findOne({
      //   where: {
      //     id: 12
      //   },
      // })
      // const airports = await city.getAirports() // SELECT `id`, `name`, `address`, `cityId`, `createdAt`, `updatedAt` FROM `airports` AS `airport` WHERE `airport`.`cityId` = 12;
      // console.log(city, airports)
    
      const airplane = await Airplane.findAll();
      console.log(airplane)
  })
}

setupAndStartServer();