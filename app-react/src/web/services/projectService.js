import http from "./http-common";

class ProjectService {
  getAll() {
    return http.get("/projects");
  }

  get(id) {
    return http.get(`/projects/${id}`);
  }

  insert(data) {
    return http.post("/projects", data);
  }

  update(data) {
    return http.put(`/projects/`, data);
  }

  delete(id) {
    return http.delete(`/projects/${id}`);
  }

  filtrate(filter) {
    return http.get(`/projects/filtro/${filter}`);
  }
}

export default new ProjectService();