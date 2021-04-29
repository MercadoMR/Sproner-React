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
    delete(id){
        return http.delete(`/song/${id}`);
    }
    get(id){
        return http.get(`/song/${id}`);
    }
    update(id,data){
        return http.put(`/song/${id}`,data);
    }

}

export default new SongsDataService();