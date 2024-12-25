import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticles } from "../../api";
import ArticleCard from "./ArticleCard";

export function ArticleList() {
  const { topic } = useParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState("created_at");
  const [searchParams, setSearchParams] = useSearchParams();
  const [orderBy, SetOrderBy] = useState("ASC");

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topic, sortBy, orderBy)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [topic, searchParams]);

  function changeSortBy(event) {
    const { name, value } = event.target;
    setSortBy(value);
    setSearchParams({ ...Object.fromEntries(searchParams), [name]: value });
  }

  const handleSortOrderChange = (event) => {
    const { name, value } = event.target;
    SetOrderBy(value);
    setSearchParams({ ...Object.fromEntries(searchParams), [name]: value });
  };

  if (!articles) return <p>No articles to be found</p>;

  return isLoading ? (
    <section className="loading">
      <h2>Loading!!!</h2>
    </section>
  ) : (
    <>
      <form>
        <label className="label"> Sort by: </label>
        <select onChange={changeSortBy} name="sort_by" value={sortBy}>
          <option value="created_at">Date</option>
          <option value="author">Author</option>
          <option value="votes">Votes</option>
        </select>
        <label className="label">Order by: </label>
        <select
          id="sort-order-dropdown"
          onChange={handleSortOrderChange}
          name="order"
          value={orderBy}
        >
          <option value="ASC">Ascending</option>
          <option value="DESC">Descending</option>
        </select>
      </form>
      <>
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
    </>
  );
}
