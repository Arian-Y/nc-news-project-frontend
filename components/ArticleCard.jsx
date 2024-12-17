import { Link } from "react-router-dom";

export default function ArticleCard({ articles }) {
  return (
    <>
      <ul id={articles.article_id}>
        <h2>
          <Link to={`/articles/${articles.article_id}`}>{articles.title}</Link>
        </h2>
        <img src={articles.article_img_url} alt={articles.title}></img>
        <p>Article id: {articles.article_id}</p>
      </ul>
    </>
  );
}
