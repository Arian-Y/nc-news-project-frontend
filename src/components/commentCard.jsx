import { deleteComments } from "../../api";

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
    <>
      <section>
        <button type="delete" id="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </section>
      <section>
        <li>
          <p>{comment.body}</p>
          <p>Comment by {comment.author}</p>
          <p>id: {comment.comment_id}</p>
        </li>
      </section>
    </>
  );
}
