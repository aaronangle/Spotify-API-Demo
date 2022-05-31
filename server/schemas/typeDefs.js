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
  type Track {
    duration_ms: Int
    href: String
    id: String
    name: String
    popularity: Int
    preview_url: String
    image: String
  }
  type Query {
    categories: [Category]
    search: [Track]
  }
`;

module.exports = typeDefs;
