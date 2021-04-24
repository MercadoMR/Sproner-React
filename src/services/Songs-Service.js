import http from "../http-common";

class SongsDataService{
    getAll(){
        return http.get('/song');
    }
    create(data){
        return http.post('/song', data);
    }
    findByTitle(title){
        return http.get(`/song?title=${title}`);
    }
}

export default new SongsDataService();