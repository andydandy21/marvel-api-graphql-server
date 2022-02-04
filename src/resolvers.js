const resolvers = {
    Query: {
        characterList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getCharacterList();
        },
    },
};

module.exports = resolvers;