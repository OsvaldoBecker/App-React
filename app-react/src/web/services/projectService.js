import http from "./http-common";

class ProjectService {
    getAll() {
        return http.get(`/projects/`);
    }
    getById(id) {
        return http.get(`/projects/${id}`);
    }
    insert(project) {
        return http.post(`/projects/`, project);
    }
    update(project) {
        return http.put(`/projects/`, project);
    }
    delete(id) {
        return http.delete(`/projects/${id}`);
    }
    filtrate(filter) {
        return http.get(`/projects/filter/${filter}`);
    }
}

export default new ProjectService();