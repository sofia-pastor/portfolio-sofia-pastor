import { NavLink } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav-link name-navbar ms-3 me-4 active"
                  : "nav-link name-navbar ms-3 me-4"
              }
            >
              Sofia Pastor
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>

            <a className="nav-link" href="/about#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
