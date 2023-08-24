const { Schema, model } = require('mongoose');

const foodTruckSchema = new Schema({
  name: String,
  cuisine: String,
  location: String,
});

const FoodTruck = model('FoodTruck', foodTruckSchema);

module.exports = FoodTruck;
