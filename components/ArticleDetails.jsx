import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticlesById } from "../api";
import { getCommentbyId } from "../api";
import { CommentCard } from "./commentCard";

export function ArticleDetails() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchArticlesById(article_id).then((articleData) => {
      console.log(articleData);
      setArticle(articleData);
      setIsLoading(false);
    });
  }, [article_id]);

  useEffect(() => {
    setIsLoading(true);
    getCommentbyId(article_id).then((commentData) => {
      setComments(commentData);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) return <p>Loading...</p>;
  if (!article) return <p>No article to be found</p>;
  return (
    <>
      <article>
        <h2>{article.title}</h2>
        <img src={article.article_img_url} alt={article.title}></img>
        <p>{article.body}</p>
        <h3>{article.author}</h3>
        <p>{article.comment_count} comments</p>
        <p>Article id: {article.article_id}</p>
      </article>
      {comments.length === 0 ? (
        <p>No comments for this article</p>
      ) : (
        <>
          <h3>Comments:</h3>(
          {comments.map((comment) => {
            return (
              <section>
                <ul id="comment-list">
                  <CommentCard comment={comment} key={comment.comment_id} />
                </ul>
              </section>
            );
          })}
          )
        </>
      )}
    </>
  );
}
