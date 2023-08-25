const { AuthenticationError } = require('apollo-server-express');
const { User, FoodTruck } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('foodTrucks');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('foodTrucks');
    },
    foodTrucks: async () => {
      return FoodTruck.find();
    },
    foodTruck: async (parent, { foodTruckId }) => {
      return FoodTruck.findOne({ _id: foodTruckId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        // Fetch the user based on the context's user information
        const user = await User.findById(context.user._id);
        return user;
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
