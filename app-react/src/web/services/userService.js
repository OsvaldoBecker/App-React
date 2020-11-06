import http from "./http-common";

class UserService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  insert(data) {
    return http.post("/users", data);
  }

  update(data) {
    return http.put(`/users/`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  filtrate(filter) {
    return http.get(`/users/filter/${filter}`);
  }
}

export default new UserService();