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

export function fetchArticlesById(article_id) {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function getCommentbyId(article_id) {
  return ncNewsApi
    .get(`/articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.error(err);
    });
}

export function setArticleVotes(article_id, voteChange) {
  return ncNewsApi
    .patch(`/articles/${article_id}`, voteChange)
    .then(({ data }) => {
      console.log(data);
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
