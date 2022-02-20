import { Link } from "react-router-dom";
import "./App.css";

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <Link to="/shop">
          <li className="nav-link">Shop</li>
        </Link>
        <Link to="/about">
          <li className="nav-link">About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
