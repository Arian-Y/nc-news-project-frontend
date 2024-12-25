import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://nc-news-project-5i4v.onrender.com/api",
});
export function fetchArticles(topic, sortBy, orderBy) {
  return ncNewsApi
    .get("/articles", {
      params: { topic, sort_by: sortBy, order: orderBy },
    })
    .then(({ data: { articles } }) => {
      return articles;
    });
}

export function fetchArticlesById(article_id) {
  return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.articles;
  });
}

export function getCommentbyId(article_id) {
  return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
}

export function setArticleVotes(article_id, voteChange) {
  return ncNewsApi
    .patch(`/articles/${article_id}`, voteChange)
    .then(({ data }) => {
      return data;
    });
}

export function postComments(article_id, commentText, user) {
  return ncNewsApi
    .post(`/articles/${article_id}/comments`, {
      body: commentText,
      userName: user,
    })
    .then(({ data }) => {
      return data;
    });
}

export function deleteComments(comment_id) {
  return ncNewsApi.delete(`/comments/${comment_id}`).then(({ data }) => {
    return data;
  });
}

export function fetchTopics() {
  return ncNewsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
}
