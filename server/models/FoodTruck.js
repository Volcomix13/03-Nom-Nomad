const { Schema, model } = require('mongoose');

const foodTruckSchema = new Schema({
  name: {
    type:String,
    required: 'Doughnut forget the name!',
    minlength:1,
    maxlenght:200,
    trim: true,
  },
  cuisine: {
    type:String,
    minlength:1,
    maxlenght:200,
    trim:true,
  },
  location: {
    type:String,
    minlength:1,
    maxlenght:200,
    trim:true,
  },
});

const FoodTruck = model('FoodTruck', foodTruckSchema);

module.exports = FoodTruck;
