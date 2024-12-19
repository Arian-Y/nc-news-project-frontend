import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

export function ArticleList() {
  const { topic, author, sort_by, order } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [orderBy, SetOrderBy] = useState("asc");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, author, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [topic, author, sortBy, orderBy]);

  function changeOrderBy(event) {
    event.preventDefault();
    SetOrderBy(event.target.value);
  }
  function changeSortBy(event) {
    event.preventDefault();
    setSortBy(event.target.value);
  }

  return isLoading ? (
    <section className="loading">
      <h2>Loading!!!</h2>
    </section>
  ) : (
    <>
      <form>
        <label className="label"> Sort by: </label>
        <select value={sortBy} onChange={changeSortBy}>
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
        </select>
        <label className="label">Order by: </label>
        <select value={orderBy} onChange={changeOrderBy}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </form>
      {articles.map((article) => {
        return (
          <section key={article.article_id}>
            <ul id="topic-list">
              <ArticleCard articles={article}></ArticleCard>
            </ul>
          </section>
        );
      })}
    </>
  );
}
