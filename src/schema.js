const { gql } = require('apollo-server-lambda');

const typeDefs = gql`
    type Query {
        "fetch a list of character objects"
        characterList: [Character!]!
        "fetch a single character object"
        characterDetail(id: ID!): Character!
        "fetch a list of comic objects"
        comicList: [Comic!]!
        "fetch a single comic objects"
        comicDetail(id: ID!): Comic!
        "fetch a list of creator objects"
        creatorList: [Creator!]!
        "fetch a single creator object"
        creatorDetail(id: ID!): Creator!
        "fetch a list of event objects"
        eventList: [Event!]!
        "fetch a single event object"
        eventDetail(id: ID!): Event!
        "fetch a list of series objects"
        seriesList: [Series!]!
        "fetch a single series object"
        seriesDetail(id: ID!): Series!
        "fetch a list of story objects"
        storyList: [Story!]!
        "fetch a single story object"
        storyDetail(id: ID!): Story!
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
        stories: [Story!]
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
        stories: [Story!]
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
        stories: [Story!]
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
        stories: [Story!]
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
        stories: [Story!]
        next: Series
        previous: Series
    }
    type Story {
        id: ID!
        title: String!
        description: String
        type: String
        thumbnail(thumbnailSize: String): String
        comics: [Comic!]
        series: [Series!]
        events: [Event!]
        characters: [Character!]
        creators: [Creator!]
        originalIssue: Comic!
    }
`

module.exports = typeDefs