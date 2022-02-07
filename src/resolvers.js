const resolvers = {
    Query: {
        characterList: async (_, __, { dataSources }) => {
            const charList = await dataSources.marvelAPI.getCharacterList();
            return charList.data.results
        },
    },
    Character: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        }
    }
};

module.exports = resolvers;