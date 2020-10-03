import http from "./http-common";

class UserService {
    getAll() {
        return http.get(`/users/`);
    }
    getById(id) {
        return http.get(`/users/${id}`);
    }
    insert(user) {
        return http.post(`/users/`, user);
    }
    update(user) {
        return http.put(`/users/`, user);
    }
    delete(id) {
        return http.delete(`/users/${id}`);
    }
    filtrate(filter) {
        return http.get(`/users/filter/${filter}`);
    }
}

export default new UserService();