import "../CSS/Loader.css";
import "../CSS/TopicList.css";
import { useState, useEffect } from "react";
import { fetchTopics, fetchArticles } from "../../api";
import { Link } from "react-router-dom";

export function TopicsList() {
  const [topics, setTopics] = useState([]);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("All");

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

  const topicQuery = selectedTopic === "All" ? "" : selectedTopic;
  useEffect(() => {
    setIsLoading(true);
    fetchArticles(topicQuery)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [topicQuery]);

  function handleChange(event) {
    setSelectedTopic(event.target.value);
  }

  return isLoading ? (
    <section className="loading">
      <div class="loader"></div>
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
              <option>All</option>
              {topics.map((topic) => {
                return <option value={topic.slug}>{topic.slug}</option>;
              })}
            </select>
          </label>
        </form>
        <section>
          <ul className="ui middle aligned divided list">
            {articles.map((article) => (
              <li className="item" key={article.article_id}>
                <div className="text-divider">
                  <Link
                    className="topic-link"
                    to={`/articles/${article.article_id}`}
                  >
                    {article.title}
                  </Link>
                  <span className="divider"></span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </>
    </>
  );
}
