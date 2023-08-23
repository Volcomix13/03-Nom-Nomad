// models/FoodTruck.js
const mongoose = require('mongoose');

const foodTruckSchema = new mongoose.Schema({
  name: String,
  cuisine: String,
  location: String,
});

const FoodTruck = mongoose.model('FoodTruck', foodTruckSchema);

module.exports = FoodTruck;
