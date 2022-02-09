const { RESTDataSource } = require('apollo-datasource-rest');

class MarvelAPI extends RESTDataSource {
    
    constructor() {
        super();
        this.baseURL = 'https://gateway.marvel.com/v1/public/'
    }

    willSendRequest(request) {
        request.params.set('ts', process.env.MARVEL_TS);
        request.params.set('apikey', process.env.MARVEL_PUBLIC_KEY);
        request.params.set('hash', process.env.MARVEL_HASH);
    }

    getCharacterList() {
        return this.get('characters')
    }
    getCharacterComics(characterId) {
        return this.get(`characters/${characterId}/comics`)
    }
    getCharacterEvents(characterId) {
        return this.get(`characters/${characterId}/events`)
    }
    getCharacterSeries(characterId) {
        return this.get(`characters/${characterId}/series`)
    }
    getCharacterStories(characterId) {
        return this.get(`characters/${characterId}/stories`)
    }

    getComicList() {
        return this.get('comics')
    }
    getComicDetail(comicId) {
        return this.get(`comics/${comicId}`)
    }
    getComicCharacters(comicId) {
        return this.get(`comics/${comicId}/characters`)
    }
    getComicCreators(comicId) {
        return this.get(`comics/${comicId}/creators`)
    }
    getComicEvents(comicId) {
        return this.get(`comics/${comicId}/events`)
    }
    getComicStories(comicId) {
        return this.get(`comics/${comicId}/stories`)
    }

    getCreatorList() {
        return this.get('creators')
    }
    getCreatorComics(creatorId) {
        return this.get(`creators/${creatorId}/comics`)
    }
    getCreatorEvents(creatorId) {
        return this.get(`creators/${creatorId}/events`)
    }
    getCreatorSeries(creatorId) {
        return this.get(`creators/${creatorId}/series`)
    }
    getCreatorStories(creatorId) {
        return this.get(`creators/${creatorId}/stories`)
    }

    getEventList() {
        return this.get('events')
    }
    getEventDetail(eventId) {
        return this.get(`events/${eventId}`)
    }
    getEventCharacters(eventId) {
        return this.get(`events/${eventId}/characters`)
    }
    getEventComics(eventId) {
        return this.get(`events/${eventId}/comics`)
    }
    getEventCreators(eventId) {
        return this.get(`events/${eventId}/creators`)
    }
    getEventSeries(eventId) {
        return this.get(`events/${eventId}/series`)
    }
    getEventStories(eventId) {
        return this.get(`events/${eventId}/stories`)
    }

    getSeriesList() {
        return this.get('series')
    }
    getSeriesDetail(seriesId) {
        return this.get(`series/${seriesId}`)
    }
    getSeriesCharacters(seriesId) {
        return this.get(`series/${seriesId}/characters`)
    }
    getSeriesComics(seriesId) {
        return this.get(`series/${seriesId}/comics`)
    }
    getSeriesCreators(seriesId) {
        return this.get(`series/${seriesId}/creators`)
    }
    getSeriesEvents(seriesId) {
        return this.get(`series/${seriesId}/events`)
    }
    getSeriesStories(seriesId) {
        return this.get(`series/${seriesId}/stories`)
    }

    getStoryList() {
        return this.get('stories')
    }
    getStoryCharacters(storyId) {
        return this.get(`stories/${storyId}/characters`)
    }
    getStoryComics(storyId) {
        return this.get(`stories/${storyId}/comics`)
    }
    getStoryCreators(storyId) {
        return this.get(`stories/${storyId}/creators`)
    }
    getStoryEvents(storyId) {
        return this.get(`stories/${storyId}/events`)
    }
    getStorySeries(storyId) {
        return this.get(`stories/${storyId}/series`)
    }
}

module.exports = MarvelAPI