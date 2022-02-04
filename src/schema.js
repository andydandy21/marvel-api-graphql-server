const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        characterList: [Character!]!
    }
    type Character {
        id: ID!
        name: String!
        description: String
        thumbnail: String
    }
`

module.exports = typeDefs