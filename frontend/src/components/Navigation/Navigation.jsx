import { NavLink, Link } from "react-router-dom";
import { HomeTab, MoviesTab, SearchTab, AboutTab, GoogleTab } from "./Buttons";
import SignIn from "../../services/googleSignIn";

export default function Navigation() {
  return (
    <div className="navigation-container">
      {/* <div className="logo-container">
        <Link to="/" className="logo">
          <img src="/logo/movieplex.png" alt="logo" />
        </Link>
      </div> */}

      <nav className="navigation">
        <ul className="navigation-menu">
          <li>
            <NavLink className="navigation-link" to="/" aria-label="Home">
              <HomeTab />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-link"
              to="/movies"
              aria-label="Movies"
            >
              <MoviesTab />
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navigation-link"
              to="/search"
              aria-label="Search"
            >
              <SearchTab />
            </NavLink>
          </li>
          <li>
            <NavLink className="navigation-link" to="/about" aria-label="About">
              <AboutTab />
            </NavLink>
          </li>
          <li>
            <div
              className="navigation-link"
              aria-label="Google SignIn"
              onClick={SignIn}
            >
              <GoogleTab />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
