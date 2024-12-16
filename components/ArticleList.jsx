import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function () {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { articleId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchArticles().then((articles) => {
      setArticles(articles);
      setIsLoading(false);
    }, []);
  });

  return articles.map((article) => {
    return (
      <section>
        <ul id="topic-list">
          <ArticleCard articles={article}></ArticleCard>
        </ul>
      </section>
    );
  });
}

// isLoading ? (
//     <section className="loading">
//       <h2>Loading!!!</h2>
//     </section>
//   ) : isLoading ?
