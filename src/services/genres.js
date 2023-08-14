import api from '../plugins/api';

class Genreservice {
    async getAllgenres(){
        const response = await api.get('/genres')
        return response.data
    }
}


export default new GenreService()
