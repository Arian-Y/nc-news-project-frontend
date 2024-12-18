export function CommentCard({ comment }) {
  return (
    <ul>
      <p>{comment.body}</p>
      <p>Comment by {comment.author}</p>
    </ul>
  );
}
