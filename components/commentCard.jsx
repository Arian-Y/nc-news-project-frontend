export function CommentCard({ comment }) {
  return (
    <>
      <section>
        <li>
          <p>{comment.body}</p>
          <p>Comment by {comment.author}</p>
        </li>
      </section>
    </>
  );
}
