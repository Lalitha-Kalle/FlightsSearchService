const { Flight } = require('../models/index')

const { Op, where } = require("sequelize")

class FlightRepository {

  #createFilter(data) {
    let filter = {};
    if(data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if(data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }

    let priceFilter = [];

    if(data.minPrice) {
      priceFilter.push({
        price:{
          [Op.gte] : data.minPrice
        }
      })
    }

    if(data.maxPrice) {
      priceFilter.push({
        price: {
          [Op.lte]: data.maxPrice
        }
      })
    }

    Object.assign(filter, {[Op.and]: priceFilter})
    console.log(filter)
    return filter;
  }


  async createFlight(data) {
    try {
      const flight = await Flight.create(data);
      return flight;
    } catch (error) {
      console.log("something went wrong in repository layer");
      throw {error};
    }
  }

  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flight.findAll({
        where: filterObject
      })
    } catch (error) {
      console.log("Something went wrong in flightrepository");
      throw {error};
    }
  }

}

module.exports = FlightRepository