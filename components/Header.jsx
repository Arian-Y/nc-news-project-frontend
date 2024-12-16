import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>NC NEWS</h1>
      <nav>
        <ul>
          <Link to={`/articles`}>Home</Link>
        </ul>
      </nav>
    </header>
  );
}
{
  /* <nav>
  <Link to="/topics/football" className="nav-link">
    Football
  </Link>
  <Link to="/topics/cooking" className="nav-link">
    Cooking
  </Link>
  <Link to="/topics/coding" className="nav-link">
    Coding
  </Link>
</nav> */
}
