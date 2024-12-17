import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../api";

export function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id).then((articleData) => {
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <article>
      <h2>{article.title}</h2>
      <img src={article.article_img_url} alt={article.title}></img>
      <h3>{article.author}</h3>
      <p>{article.comment_count} comments</p>
      <p>Article id: {article.article_id}</p>
    </article>
  );
}
