import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

export function ArticleList() {
  const { topic, author, sort_by, order } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState(" ");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, author, sort_by, order)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [topic, author, sort_by, order]);

  return isLoading ? (
    <section className="loading">
      <h2>Loading!!!</h2>
    </section>
  ) : (
    <>
      {articles.map((article) => {
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
      })}
    </>
  );
}

// function onAuthorChange(event) {
//   setSelectedAuthor(event.target.value);
// }

{
  /* <form>
<label className="label">
  Authored by:{" "}
  <select
    name="author"
    id="author-dropdown"
    value={selectedAuthor}
    onChange={onAuthorChange}
  ></select>
</label>
</form> */
}
