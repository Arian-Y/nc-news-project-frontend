import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticlesById, setArticleVotes } from "../../api";
import { CommentPage } from "./CommentPage";
import "../CSS/ArticleDetails.css";
export function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [vote, setVote] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id)
      .then((articleData) => {
        setArticle(articleData);

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setIsLoading(false);
      });
  }, [article_id]);

  function incrementVote(event) {
    event.preventDefault();
    setVote(article.votes);
    const voteChange = {
      inc_votes: 1,
    };

    setArticleVotes(article_id, voteChange).then((data) => {
      setArticle(data);
    });
  }

  function decrementVote(event) {
    event.preventDefault();
    setVote(article.votes);
    const voteChange = {
      inc_votes: -1,
    };

    setArticleVotes(article_id, voteChange).then((data) => {
      setArticle(data);
    });
  }

  if (isLoading) return <p>Loading...</p>;
  if (!article) return <p>No article to be found</p>;
  return (
    <>
      <article>
        <h2 id="article-title">{article.title}</h2>
        <span className="divider"></span>
        <p className="padding"></p>
        <img
          className="article-image"
          src={article.article_img_url}
          alt={article.title}
        ></img>
        <p className="article-text">{article.body}</p>
        <h3 className="article-author">Written by {article.author}</h3>
        <span className="divider"></span>
        <p className="padding"></p>
        <p>
          Votes: {article.votes}
          <button onClick={incrementVote}>+</button>
          <button onClick={decrementVote}>-</button>
        </p>
      </article>
      {
        <>
          <nav>
            <CommentPage />
            <p>{article.comment_count} comments</p>
          </nav>
        </>
      }
    </>
  );
}
