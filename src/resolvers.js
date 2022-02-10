const resolvers = {
    Query: {
        characterList: async (_, __, { dataSources }) => {
            const charList = await dataSources.marvelAPI.getCharacterList();
            return charList.data.results
        },
        characterDetail: async (_, { id }, { dataSources }) => {
            const charDetail = await dataSources.marvelAPI.getCharacterDetail(id);
            return charDetail.data.results[0];
        },
        comicList: async (_, __, { dataSources }) => {
            const comList = await dataSources.marvelAPI.getComicList();
            return comList.data.results;
        },
        comicDetail: async (_, { id }, { dataSources }) => {
            const comDetail = await dataSources.marvelAPI.getComicDetail(id);
            return comDetail.data.results[0];
        },
        creatorList: async (_, __, { dataSources }) => {
            const creList = await dataSources.marvelAPI.getCreatorList();
            return creList.data.results;
        },
        creatorDetail: async (_, { id }, { dataSources }) => {
            const creDetail = await dataSources.marvelAPI.getCreatorDetail(id);
            return creDetail.data.results[0];
        },
        eventList: async (_, __, { dataSources }) => {
            const evList = await dataSources.marvelAPI.getEventList();
            return evList.data.results;
        },
        eventDetail: async (_, { id }, { dataSources }) => {
            const evDetail = await dataSources.marvelAPI.getEventDetail(id);
            return evDetail.data.results[0];
        },
        seriesList: async (_, __, { dataSources }) => {
            const serList = await dataSources.marvelAPI.getSeriesList();
            return serList.data.results;
        },
        seriesDetail: async (_, { id }, { dataSources }) => {
            const serDetail = await dataSources.marvelAPI.getSeriesDetail(id);
            return serDetail.data.results[0];
        },
        storyList: async (_, __, { dataSources }) => {
            const stoList = await dataSources.marvelAPI.getStoryList();
            return stoList.data.results;
        },
        storyDetail: async (_, { id }, { dataSources }) => {
            const stoDetail = await dataSources.marvelAPI.getStoryDetail(id);
            return stoDetail.data.results[0];
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
        },
        series: async ({ id }, _, { dataSources }) => {
            const characterSeries = await dataSources.marvelAPI.getCharacterSeries(id);
            return characterSeries.data.results;
        },
        stories: async ({ id }, _, { dataSources }) => {
            const characterStories = await dataSources.marvelAPI.getCharacterStories(id);
            if (!characterStories.data?.results) return null
            return characterStories.data.results;
        },
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
        },
        stories: async ({ id }, _, { dataSources }) => {
            const comicStories = await dataSources.marvelAPI.getComicStories(id);
            if (!comicStories.data?.results) return null
            return comicStories.data.results;
        },
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
        },
        series: async ({ id }, _, { dataSources }) => {
            const creatorSeries = await dataSources.marvelAPI.getCreatorSeries(id);
            return creatorSeries.data.results
        },
        stories: async ({ id }, _, { dataSources }) => {
            const creatorStories = await dataSources.marvelAPI.getCreatorStories(id);
            if (!creatorStories.data?.results) return null
            return creatorStories.data.results;
        },
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
        series: async ({ id }, _, { dataSources }) => {
            const eventSeries = await dataSources.marvelAPI.getEventSeries(id);
            return eventSeries.data.results
        },
        stories: async ({ id }, _, { dataSources }) => {
            const eventStories = await dataSources.marvelAPI.getEventStories(id);
            if (!eventStories.data?.results) return null
            return eventStories.data.results;
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
    },
    Series: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge";
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`;
        },
        characters: async ({ id }, _, { dataSources }) => {
            const seriesCharacters = await dataSources.marvelAPI.getSeriesCharacters(id)
            return seriesCharacters.data.results
        },
        comics: async ({ id }, _, { dataSources }) => {
            const seriesComics = await dataSources.marvelAPI.getSeriesComics(id)
            return seriesComics.data.results
        },
        creators: async ({ id }, _, { dataSources }) => {
            const seriesCreators = await dataSources.marvelAPI.getSeriesCreators(id)
            return seriesCreators.data.results
        },
        events: async ({ id }, _, { dataSources }) => {
            const seriesEvents = await dataSources.marvelAPI.getSeriesEvents(id)
            return seriesEvents.data.results
        },
        stories: async ({ id }, _, { dataSources }) => {
            const seriesStories = await dataSources.marvelAPI.getSeriesStories(id);
            if (!seriesStories.data?.results) return null
            return seriesStories.data.results;
        },
        next: async ({ next }, _, { dataSources }) => {
            if (next) {
                let nextLink = next.resourceURI.split('/');
                const nextSeries = await dataSources.marvelAPI.getSeriesDetail(nextLink.pop());
                return nextSeries.data.results[0]
            } else {
                return null
            }
        },
        previous: async ({ previous }, _, { dataSources }) => {
            if (previous) {
                let previousLink = previous.resourceURI.split('/');
                const previousSeries = await dataSources.marvelAPI.getSeriesDetail(previousLink.pop());
                return previousSeries.data.results[0]
            } else {
                return null
            }
        }
    },
    Story: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            if (!thumbnail) return null
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge";
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`;
        },
        characters: async ({ id }, _, { dataSources }) => {
            const storyCharacters = await dataSources.marvelAPI.getStoryCharacters(id)
            return storyCharacters.data.results
        },
        comics: async ({ id }, _, { dataSources }) => {
            const storyComics = await dataSources.marvelAPI.getStoryComics(id)
            return storyComics.data.results
        },
        creators: async ({ id }, _, { dataSources }) => {
            const storyCreators = await dataSources.marvelAPI.getStoryCreators(id)
            return storyCreators.data.results
        },
        events: async ({ id }, _, { dataSources }) => {
            const storyEvents = await dataSources.marvelAPI.getStoryEvents(id)
            return storyEvents.data.results
        },
        series: async ({ id }, _, { dataSources }) => {
            const storySeries = await dataSources.marvelAPI.getStorySeries(id)
            return storySeries.data.results
        },
        originalIssue: async ({ originalIssue }, _, { dataSources }) => {
            if (originalIssue) {
                let originalIssueLink = originalIssue.resourceURI.split('/');
                const storyOriginalIssue = await dataSources.marvelAPI.getComicDetail(originalIssueLink.pop());
                return storyOriginalIssue.data.results[0]
            } else {
                return null
            }
        }
    }
};

module.exports = resolvers;