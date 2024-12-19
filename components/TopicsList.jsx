import { useState, useEffect } from "react";
import { fetchTopics, fetchArticles } from "../api";
import { Link } from "react-router-dom";

export default function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("football");

  useEffect(() => {
    setIsLoading(true);
    fetchTopics()
      .then((data) => {
        setTopics(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching topics:", err);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(selectedTopic)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [selectedTopic]);

  function handleChange(event) {
    setSelectedTopic(event.target.value);
  }

  return isLoading ? (
    <section className="loading">
      <h2>Loading!!!</h2>
    </section>
  ) : (
    <>
      <>
        <form>
          <label className="label">
            Select Topic:{" "}
            <select
              name="topic"
              id="topic-dropdown"
              value={selectedTopic}
              onChange={handleChange}
            >
              {topics.map((topic) => {
                return <option value={topic.slug}>{topic.slug}</option>;
              })}
            </select>
          </label>
        </form>
        <section>
          <h3>Articles on {selectedTopic}</h3>
          <ul>
            {articles.map((article) => (
              <li key={article.article_id}>
                <Link to={`/articles/${article.article_id}`}>
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </>
    </>
  );
}
