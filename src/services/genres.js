import api from '../plugins/api';

class genreService {
    async getAllgenres(){
        const response = await api.get('/genres')
        return response.data
    }
    async saveGenre(genre) {
        const response = await api.post('/genres/', genre)
        return response.data
    }
}

