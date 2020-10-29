import http from "./http-common";

class ActivityService {
    getAll() {
        return http.get(`/activities/`);
    }
    getById(id) {
        return http.get(`/activities/${id}`);
    }
    insert(activity) {
        return http.post(`/activities/`, activity);
    }
    update(activity) {
        return http.put(`/activities/`, activity);
    }
    delete(id) {
        return http.delete(`/activities/${id}`);
    }
    filtrate(filter) {
        return http.get(`/activities/filter/${filter}`);
    }
}

export default new ActivityService();