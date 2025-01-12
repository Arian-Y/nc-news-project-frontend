import { Link } from "react-router-dom";
import "../CSS/ArticleCard.css";

export default function ArticleCard({ articles }) {
  return (
    <div className="card">
      <img
        className="card__image"
        src={articles.article_img_url}
        alt={articles.title}
      />
      <div className="card__content" id={articles.article_id}>
        <h2>
          <Link className="card__title" to={`/articles/${articles.article_id}`}>
            {articles.title}
          </Link>
        </h2>
        <p className="card__description">{articles.body}</p>
        <p>Published on: {articles.created_at}</p>
        <p>Click on the title to find out more...</p>
      </div>
    </div>
  );
}
