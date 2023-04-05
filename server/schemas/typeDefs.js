const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Artist {
    _id: ID
    name: String!
    age: Number
    story: String!
    work: [Artwork]
  }
`;

module.exports = typeDefs;
