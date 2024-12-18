import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

export function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles()
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <section className="loading">
      <h2>Loading!!!</h2>
    </section>
  ) : (
    articles.map((article) => {
      return (
        <section>
          <ul id="topic-list">
            <ArticleCard
              articles={article}
              key={article.article_id}
            ></ArticleCard>
          </ul>
        </section>
      );
    })
  );
}
