import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { HomeTab, MoviesTab, SearchTab, AboutTab, GoogleTab } from "./Buttons";
import SignIn from "../../services/googleSignIn";
import UseLocalStorage from "../../hooks/useLocalStorage";

export default function Navigation() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id != null) setLoggedIn(true);
    else setLoggedIn(false);
  }, []);

  const handleLogin = () => {
    SignIn(setLoggedIn);
  };

  const handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    setLoggedIn(false);
    window.location.reload(false);
  };

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
            {isLoggedIn ? (
              <div
                className="navigation-link"
                aria-label="Google SignIn"
                onClick={handleLogout}
              >
                <GoogleTab logged={true} />
              </div>
            ) : (
              <div
                className="navigation-link"
                aria-label="Google SignIn"
                onClick={handleLogin}
              >
                <GoogleTab logged={false} />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
