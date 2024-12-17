export function CommentCard({ comment }) {
  return (
    <>
      <li>
        <p>{comment.body}</p>
        <p>{comment.author}</p>
      </li>
    </>
  );
}
