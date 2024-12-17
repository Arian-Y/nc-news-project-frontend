import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>NC NEWS</h1>
      <nav>
        <ul>
          <Link to="/" className="header-link">
            Home
          </Link>
          <Link to={`/articles`} className="header-link">
            Articles
          </Link>
        </ul>
      </nav>
    </header>
  );
}
