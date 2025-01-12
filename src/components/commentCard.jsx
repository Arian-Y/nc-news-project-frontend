import { deleteComments } from "../../api";
import "../CSS/Comments.css";

export function CommentCard({ comment, user, setComments }) {
  function handleDelete(event) {
    event.preventDefault();
    if (user === comment.author) {
      deleteComments(comment.comment_id).then(() => {
        setComments((prevComments) =>
          prevComments.filter((c) => c.comment_id !== comment.comment_id)
        );
      });
    }
  }
  return (
    <div class="card-comment">
      <div class="bg"></div>
      <div class="blob"></div>

      {user !== comment.author ? (
        <section className="comment-text">
          <ul>
            <p>{comment.body}</p>
            <p>Comment by {comment.author}</p>
          </ul>
        </section>
      ) : (
        <>
          <section>
            <button type="delete" id="delete-button" onClick={handleDelete}>
              Delete
            </button>
          </section>
          <section>
            <ul className="comment-text">
              <p>{comment.body}</p>
              <p>Comment by {comment.author}</p>
            </ul>
          </section>
        </>
      )}
    </div>
  );
}
