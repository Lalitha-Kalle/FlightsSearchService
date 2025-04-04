const express = require("express")
const CityController = require("../../controllers/city-controller")

const router = express.Router()

router.post('/city', CityController.create);
router.delete('/city', CityController.destroy);
router.patch('/city', CityController.update);
router.get('/city', CityController.get);


module.exports = router