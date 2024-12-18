import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchArticlesById, setArticleVotes } from "../api";
import { getCommentbyId } from "../api";

export function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [vote, setVote] = useState();

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id).then((articleData) => {
      setArticle(articleData);
      getCommentbyId(article_id).then((commentData) => {
        setComments(commentData);
      });
      setIsLoading(false);
    });
  }, [article_id, setComments]);

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
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={article.title}></img>
        <p>{article.body}</p>
        <h3>Written by {article.author}</h3>
        <p>
          Votes: {article.votes}
          <button onClick={incrementVote}>+</button>
          <button onClick={decrementVote}>-</button>
        </p>
        <p>Article id: {article.article_id}</p>
      </article>
      {
        <>
          <nav>
            <Link to={`/articles/${article_id}/comments`}>
              View all comments
            </Link>
            <p>{article.comment_count} comments</p>
          </nav>
        </>
      }
    </>
  );
}
// useEffect(() => {
//   setIsLoading(true);
//   getCommentbyId(article_id).then((commentData) => {
//     setComments(commentData);
//     setIsLoading(false);
//   });
// }, [article_id]);
