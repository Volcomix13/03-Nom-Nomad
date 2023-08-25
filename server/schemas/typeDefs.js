const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type FoodTruck {
    _id: ID!
    name: String!
    cuisine: String!
    location: String!
  }

  type User {
    _id: ID!
    username: String!
    email: String!
 # favorites:  add favorites here(have to figure out the logistics with favorites)
  }

  type Query {
    foodTrucks: [FoodTruck]
    foodTruck(foodTruckId: ID!): FoodTruck
    # Add user queries here
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addFoodTruck(name: String!, cuisine: String!, location: String!): FoodTruck
    # Add user mutations here
    addUser(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`;

module.exports = typeDefs;


//remember to change the favorites under the user stuff I have no clue how to do that right now but it is a fucntionality we want