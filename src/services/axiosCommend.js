import http from "./httpServices";

export function getAllComments() {
  return http.get("/comments");
}
export function getOneComment(selectedId) {
  return http.get(`/comments/${selectedId}`);
}
export function postNewComment(newComment) {
  return http.post("/comments", newComment);
}
export function deleteOneComment(id) {
  console.log(id);
  return http.delete(`comments/${id}`);
}
