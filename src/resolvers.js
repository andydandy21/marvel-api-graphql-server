const resolvers = {
    Query: {
        characterList: async (_, __, { dataSources }) => {
            const charList = await dataSources.marvelAPI.getCharacterList();
            return charList.data.results
        },
        comicList: async (_, __, { dataSources }) => {
            const comList = await dataSources.marvelAPI.getComicList();
            return comList.data.results;
        },
        creatorList: async(_, __, { dataSources }) => {
            const creList = await dataSources.marvelAPI.getCreatorList();
            return creList.data.results;
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
        },
        characters: async ({ id }, _, { dataSources }) => {
            const comicCharacters = await dataSources.marvelAPI.getComicCharacters(id);
            return comicCharacters.data.results;
        },
        creators: async ({ id }, _, {dataSources}) => {
            const comicCreators = await dataSources.marvelAPI.getComicCreators(id);
            return comicCreators.data.results;
        }
    },
    Creator: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        comics: async ({ id }, _, { dataSources }) => {
            const creatorComics = await dataSources.marvelAPI.getCreatorComics(id);
            return creatorComics.data.results
        }
    }
};

module.exports = resolvers;