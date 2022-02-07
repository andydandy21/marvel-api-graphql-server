const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "fetch a list of character objects"
        characterList: [Character!]!
    }
    type Character {
        "unique identifier"
        id: ID!
        "name of the character"
        name: String!
        "character description, if there is one"
        description: String
        """
        character picture
        see https://developer.marvel.com/documentation/images for sizing options
        """
        thumbnail(thumbnailSize: String): String 
    }
`

module.exports = typeDefs