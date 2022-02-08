const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "fetch a list of character objects"
        characterList: [Character!]!
        "fetch a list of comic objects"
        comicList: [Comic!]!
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
        "an array of Comic objects" 
        comics: [Comic!]
    }
    type Comic {
        id: ID!
        title: String!
        issueNumber: Int!
        variantDescription: String
        isbn: String!
        upc: String!
        ean: String!
        issn: String!
        format: String
        pageCount: Int
        thumbnail(thumbnailSize: String): String
    }
`

module.exports = typeDefs