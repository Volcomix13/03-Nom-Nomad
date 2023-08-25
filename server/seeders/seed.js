const db = require('../config/connection');
const mongoose = require('mongoose');
const {User, FoodTruck} = require('../models')
const userSeeds = require('./userSeeds.json');
const truckSeeds = require('./truckSeeds.json');


db.once( 'open', async () => {
  try {
    await FoodTruck.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < truckSeeds.length; i++) {
      const foodTruck = await FoodTruck.create(truckSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: foodTruck.name }, 
        {
          $addToSet: {
            trucks: foodTruck._id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    mongoose.connection.close();
    console.log('All done!');
    process.exit(0);
  }
});

seedData();
