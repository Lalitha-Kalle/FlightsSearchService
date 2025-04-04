// const { where } = require('sequelize');
const { City } = require('../models/index');
// const city = require('../models/city');

class CityRepository {
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      // console.log(city);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }

  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId
        }
      });
    } catch (error) {
      console.log("Something went wrong in the repository")
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId
      //   }
      // })
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repository")
      throw(error);
    }
  }
  
  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("something went wrong in repository")
      throw(error)
    }
  }

  async getAllCities() {
    try {
      const cities = await City.findAll();
      return cities;
    } catch(error) {
      console.log(error);
      throw {error}
    }
  }
}

module.exports = CityRepository;