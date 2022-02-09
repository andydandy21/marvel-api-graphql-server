const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        "fetch a list of character objects"
        characterList: [Character!]!
        "fetch a list of comic objects"
        comicList: [Comic!]!
        "fetch a list of creator objects"
        creatorList: [Creator!]!
        "fetch a list of event objects"
        eventList: [Event!]!
        "fetch a single event object"
        eventDetail(id: ID!): Event!
        "fetch a list of series objects"
        seriesList: [Series!]!
        "fetch a single series object"
        seriesDetail(id: ID!): Series!
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
        events: [Event!]
        series: [Series!]
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
        characters: [Character!]
        creators: [Creator!]
        events: [Event!]
    }
    type Creator {
        id: ID!
        firstName: String!
        middleName: String
        lastName: String!
        suffix: String
        fullName: String
        thumbnail(thumbnailSize: String): String
        comics: [Comic!]
        events: [Event!]
        series: [Series!]
    }
    type Event {
        id: ID!
        title: String!
        description: String
        start: String
        end: String
        thumbnail(thumbnailSize: String): String
        comics: [Comic!]
        characters: [Character!]
        creators: [Creator!]
        series: [Series!]
        next: Event
        previous: Event
    }
    type Series {
        id: ID!
        title: String!
        description: String
        startYear: String
        endYear: String
        rating: String
        thumbnail(thumbnailSize: String): String
        comics: [Comic!]
        events: [Event!]
        characters: [Character!]
        creators: [Creator!]
        next: Series
        previous: Series
    }
`

module.exports = typeDefs