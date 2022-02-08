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

    getComicList() {
        return this.get('comics')
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

    getCreatorList() {
        return this.get('creators')
    }
    getCreatorComics(creatorId) {
        return this.get(`creators/${creatorId}/comics`)
    }
    getCreatorEvents(creatorId) {
        return this.get(`creators/${creatorId}/events`)
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
}

module.exports = MarvelAPI