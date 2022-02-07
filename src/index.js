require('dotenv').config();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const MarvelAPI = require('./datasources/marvel-api');

async function startApolloServer(typeDefs, resolvers) {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        dataSources: () => {
            return {
                marvelAPI: new MarvelAPI(),
            };
        },
    });

    const {url, port} = await server.listen({port: 4000});
    console.log(`
        Server is running
        Listening on port ${port}
        Query at ${url}
    `);
};

startApolloServer(typeDefs, resolvers);