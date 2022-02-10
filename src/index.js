require('dotenv').config();

const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const MarvelAPI = require('./datasources/marvel-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            marvelAPI: new MarvelAPI(),
        };
    },
});

exports.graphqlHandler = server.createHandler();