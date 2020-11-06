import http from "./http-common";

class ActivityService {
  getAll() {
    return http.get("/activities");
  }

  get(id) {
    return http.get(`/activities/${id}`);
  }

  insert(data) {
    return http.post("/activities", data);
  }

  update(data) {
    return http.put(`/activities/`, data);
  }

  delete(id) {
    return http.delete(`/activities/${id}`);
  }

  filtrate(filter) {
    return http.get(`/activities/filter/${filter}`);
  }
}

export default new ActivityService();