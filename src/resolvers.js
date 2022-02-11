const resolvers = {
    Query: {
        characterList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getObjectList('characters');
        },
        characterDetail: (_, { id }, { dataSources }) => {
            return dataSources.marvelAPI.getObjectDetail('characters', id);
        },
        comicList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getObjectList('comics');
        },
        comicDetail: (_, { id }, { dataSources }) => {
            return dataSources.marvelAPI.getObjectDetail('comics', id);
        },
        creatorList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getObjectList('creators');
        },
        creatorDetail: (_, { id }, { dataSources }) => {
            return dataSources.marvelAPI.getObjectDetail('creators', id);
        },
        eventList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getObjectList('events');
        },
        eventDetail: (_, { id }, { dataSources }) => {
            return dataSources.marvelAPI.getObjectDetail('events', id);
        },
        seriesList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getObjectList('series');
        },
        seriesDetail: (_, { id }, { dataSources }) => {
            return dataSources.marvelAPI.getObjectDetail('series', id);
        },
        storyList: (_, __, { dataSources }) => {
            return dataSources.marvelAPI.getObjectList('stories');
        },
        storyDetail: (_, { id }, { dataSources }) => {
            return dataSources.marvelAPI.getObjectDetail('stories', id);
        }
    },
    Character: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        comics: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('characters', id, 'comics');
        },
        events: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('characters', id, 'events');
        },
        series: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('characters', id, 'series');
        },
        stories: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('characters', id, 'stories');
        },
    },
    Comic: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        characters: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('comics', id, 'characters');
        },
        creators: ({ id }, _, {dataSources}) => {
            return dataSources.marvelAPI.getObjectRelation('comics', id, 'creators');
        },
        events: ({ id }, _, {dataSources}) => {
            return dataSources.marvelAPI.getObjectRelation('comics', id, 'events');
        },
        stories: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('comics', id, 'stories');
        },
    },
    Creator: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        comics: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('creators', id, 'comics');
        },
        events: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('creators', id, 'events');
        },
        series: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('creators', id, 'series');
        },
        stories: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('creators', id, 'stories');
        },
    },
    Event: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge"
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`
        },
        characters: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('events', id, 'characters');
        },
        comics: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('events', id, 'comics');
        },
        creators: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('events', id, 'creators');
        },
        series: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('events', id, 'series');
        },
        stories: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('events', id, 'stories');
        },
        next: ({ next }, _, { dataSources }) => {
            if (next) {
                let nextLink = next.resourceURI.split('/');
                return dataSources.marvelAPI.getObjectDetail('events', nextLink.pop());
            } else {
                return null
            }
        },
        previous: ({ previous }, _, { dataSources }) => {
            if (previous) {
                let prevLink = previous.resourceURI.split('/');
                return dataSources.marvelAPI.getObjectsDetail('events', prevLink.pop());
            } else {
                return null
            }
        }
    },
    Series: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge";
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`;
        },
        characters: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('series', id, 'characters')
        },
        comics: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('series', id, 'comics')
        },
        creators: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('series', id, 'creators')
        },
        events: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('series', id, 'events')
        },
        stories: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('series', id, 'stories');
        },
        next: ({ next }, _, { dataSources }) => {
            if (next) {
                let nextLink = next.resourceURI.split('/');
                return dataSources.marvelAPI.getObjectDetail('series', nextLink.pop());
            } else {
                return null
            }
        },
        previous: ({ previous }, _, { dataSources }) => {
            if (previous) {
                let previousLink = previous.resourceURI.split('/');
                return dataSources.marvelAPI.getObjectDetail('series', previousLink.pop());
            } else {
                return null
            }
        }
    },
    Story: {
        thumbnail: ({ thumbnail }, { thumbnailSize }) => {
            if (!thumbnail) return null
            // provides a default size value if none is given
            if (!thumbnailSize) thumbnailSize = "portrait_xlarge";
            return `${thumbnail.path}/${thumbnailSize}.${thumbnail.extension}`;
        },
        characters: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('stories', id, 'characters')
        },
        comics: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('stories', id, 'comics')
        },
        creators: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('stories', id, 'creators')
        },
        events: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('stories', id, 'events')
        },
        series: ({ id }, _, { dataSources }) => {
            return dataSources.marvelAPI.getObjectRelation('stories', id, 'series')
        },
        originalIssue: ({ originalIssue }, _, { dataSources }) => {
            if (originalIssue) {
                let originalIssueLink = originalIssue.resourceURI.split('/');
                return dataSources.marvelAPI.getObjectDetail('comics', originalIssueLink.pop());
            } else {
                return null
            }
        }
    }
};

module.exports = resolvers;