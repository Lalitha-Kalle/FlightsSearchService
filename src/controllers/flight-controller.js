const {FlightService} = require("../services/index")
const { SuccessCodes } = require('../utils/error-codes')
const flightService = new FlightService()

const create = async (req, res) => {
  try {
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price
    }
    const flight = await flightService.createFlight(flightRequestData);
    // return res.status(201).json({
    return res.status(SuccessCodes.CREATED).json({
      data: flight,
      success: true,
      message: "Successfully flight created",
      err: {}
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create a flight",
      err: error
    })
  }
}

const getAll = async (req, res) => {
  try {
    const response = await flightService.getAllFlightData(req.query);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully fetched the flights",
      err: {}
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to get all flights",
      err: error
    })
  }
}

const get = async (req, res) => {
  try {
    const response = await flightService.getFlight(req.params.id);
    return res.status(SuccessCodes.OK).json({
      data: response,
      success: true,
      message: "successfully feteched the flight"
    })
  } catch (error) {

  }
}

module.exports = {
  create,
  getAll
}