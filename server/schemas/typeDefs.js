const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    id: String
    name: String
    href: String
    icons: [Icon]
  }
  type Icon {
    height: Int
    url: String
    width: Int
  }
  type Query {
    categories: [Category]
  }
`;

module.exports = typeDefs;
