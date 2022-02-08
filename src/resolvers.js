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
        creatorList: async (_, __, { dataSources }) => {
            const creList = await dataSources.marvelAPI.getCreatorList();
            return creList.data.results;
        },
        eventList: async (_, __, { dataSources }) => {
            const evList = await dataSources.marvelAPI.getEventList();
            return evList.data.results;
        },
        eventDetail: async (_, { id }, { dataSources }) => {
            const evDetail = await dataSources.marvelAPI.getEventDetail(id);
            return evDetail.data.results[0];
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
        },
        events: async ({ id }, _, { dataSources }) => {
            const characterEvents = await dataSources.marvelAPI.getCharacterEvents(id);
            return characterEvents.data.results;
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
        },
        events: async ({ id }, _, {dataSources}) => {
            const comicEvents = await dataSources.marvelAPI.getComicEvents(id);
            return comicEvents.data.results;
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
        },
        events: async ({ id }, _, { dataSources }) => {
            const creatorEvents = await dataSources.marvelAPI.getCreatorEvents(id);
            return creatorEvents.data.results
        }
    },
    Event: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        characters: async ({ id }, _, { dataSources }) => {
            const eventCharacters = await dataSources.marvelAPI.getEventCharacters(id);
            return eventCharacters.data.results
        },
        comics: async ({ id }, _, { dataSources }) => {
            const eventComics = await dataSources.marvelAPI.getEventComics(id);
            return eventComics.data.results
        },
        creators: async ({ id }, _, { dataSources }) => {
            const eventCreators = await dataSources.marvelAPI.getEventCreators(id);
            return eventCreators.data.results
        },
        next: async ({ next }, _, { dataSources }) => {
            if (next) {
                let nextLink = next.resourceURI.split('/');
                const nextEvent = await dataSources.marvelAPI.getEventDetail(nextLink.pop());
                return nextEvent.data.results[0];
            } else {
                return null
            }
        },
        previous: async ({ previous }, _, { dataSources }) => {
            if (previous) {
                let prevLink = previous.resourceURI.split('/');
                const prevEvent = await dataSources.marvelAPI.getEventDetail(prevLink.pop());
                return prevEvent.data.results[0];
            } else {
                return null
            }
        }
    }
};

module.exports = resolvers;