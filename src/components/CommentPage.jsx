import "../CSS/Comments.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCommentbyId, postComments } from "../../api";
import { CommentCard } from "./commentCard";

export function CommentPage() {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [commentText, setCommentText] = useState("");

  const user = "jessjelly";

  useEffect(() => {
    setLoading(true);
    getCommentbyId(article_id).then((commentData) => {
      setComments(commentData);
      setLoading(false);
    });
  }, [article_id]);

  function handleSubmit(event) {
    event.preventDefault();
    postComments(article_id, commentText, user)
      .then((newComment) => {
        setComments((prevComment) => [newComment.comment, ...prevComment]);
        setCommentText("");
      })
      .catch((err) => {
        console.error("Failed to post comment:", err);
      });
  }

  function handleCommentChange(event) {
    setCommentText(event.target.value);
  }

  return (
    <>
      {loading ? (
        <p>Loading comments...</p>
      ) : comments.length === 0 ? (
        <p>No comments for this article</p>
      ) : (
        comments.map((comment) => (
          <section key={comment.comment_id}>
            <ul id="comment-list">
              <CommentCard
                comment={comment}
                user={user}
                comments={comments}
                setComments={setComments}
              />
            </ul>
          </section>
        ))
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="comment-text"
          placeholder="comment"
          id="comment-input"
          value={commentText}
          required
          onChange={handleCommentChange}
        />
        <button type="submit" id="submit-button">
          Submit
        </button>
      </form>
    </>
  );
}
