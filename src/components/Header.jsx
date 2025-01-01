import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Headline Hub</h1>
      <nav>
        <div className="link-css">
          <Link to="/" className="header-link">
            Home
          </Link>

          <Link to={`/articles`} className="header-link">
            Articles
          </Link>

          <Link to={`/topics`} className="header-link">
            Topics
          </Link>
        </div>
      </nav>
    </header>
  );
}
