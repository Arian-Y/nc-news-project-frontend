import { Link } from "react-router-dom";
import "../CSS/Header.css";

export default function Header() {
  return (
    <header>
      <nav className="header-css">
        <div>
          <img
            className="header-logo"
            src="/images/HeadlineHub.png"
            alt="Headline hub image"
          />
        </div>
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
      <h2 className="Welcome-tag">
        Welcome to Headline Hub Click On The Articles Above
      </h2>
    </header>
  );
}
