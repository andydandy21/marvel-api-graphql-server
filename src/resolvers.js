const resolvers = {
    Query: {
        characterList: async (_, __, { dataSources }) => {
            const charList = await dataSources.marvelAPI.getCharacterList();
            return charList.data.results
        },
        comicList: async (_, __, { dataSources }) => {
            const comList = await dataSources.marvelAPI.getComicList();
            return comList.data.results;
        }
    },
    Character: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        comics: async ({ id }, _, { dataSources }) => {
            const characterComics = await dataSources.marvelAPI.getCharacterComics(id);
            return characterComics.data.results;
        }
    },
    Comic: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        }
    }
};

module.exports = resolvers;