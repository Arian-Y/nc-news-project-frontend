import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-project-5i4v.onrender.com/api",
});
export function fetchArticles() {
  return ncNewsApi
    .get("/articles")
    .then(({ data: { articles } }) => {
      return articles;
    })
    .catch((err) => {
      console.error(err);
    });
}

// export function fetchTopics() {
//   return ncNewsApi
//     .get("/topics")
//     .then(({ data: { topics } }) => {
//       return topics;
//     })
//     .catch((err) => {
//       console.error(err);
//     });
// }
