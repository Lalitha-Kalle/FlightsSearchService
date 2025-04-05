const { Airplane } = require('../models/index')

class AirplaneRepository {
  async getAirplane(id) {
    try {
      const airplane = await Airplane.findbyPk(id);
      return airplane;
    } catch (error) {
      console.log("Something went wrong in repository layer");
      throw {error};
    }
  }
}

module.exports = AirplaneRepository