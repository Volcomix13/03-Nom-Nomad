const { AuthenticationError } = require('apollo-server-express');
const { User, FoodTruck } = require('../models'); // Update the import here
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('foodTrucks'); // Update to 'foodTrucks'
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('foodTrucks'); // Update to 'foodTrucks'
    },
    foodTrucks: async () => {
      return FoodTruck.find(); // Fetch all food trucks
    },
    foodTruck: async (parent, { foodTruckId }) => {
      return FoodTruck.findOne({ _id: foodTruckId }); // Fetch a single food truck
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('foodTrucks'); // Update to 'foodTrucks'
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addFoodTruck: async (parent, { name, cuisine, location }) => {
      const foodTruck = await FoodTruck.create({
        name,
        cuisine,
        location,
      });
      return foodTruck;
    },
    // ... other resolvers if needed
  },

};

module.exports = resolvers;
