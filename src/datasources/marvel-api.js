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

    getObjectList(object) {
        return this.get(`${object}`).then(res => res.data?.results)
    }
    getObjectDetail(object, objectId) {
        return this.get(`${object}/${objectId}`).then(res => res.data?.results[0])
    }
    getObjectRelation(object, objectId, otherObject) {
        return this.get(`${object}/${objectId}/${otherObject}`).then(res => res.data?.results)
    }    
}

module.exports = MarvelAPI