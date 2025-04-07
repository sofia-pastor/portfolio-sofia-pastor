import { NavLink, useLocation } from "react-router-dom";

import "../styles/Navbar.css";

export default function Navbar() {
  const location = useLocation();

  function handleScrollIfSamePath(path) {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function contactLink() {
    if (location.pathname === "/about") {
      return (
        <a href="#contact" className="nav-link">
          Contact
        </a>
      );
    } else {
      return (
        <NavLink to="/about#contact" className="nav-link">
          Contact
        </NavLink>
      );
    }
  }

  return (
    <nav className="navbar fixed-top navbar-expand-md">
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
              onClick={() => handleScrollIfSamePath("/")}
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
              onClick={() => handleScrollIfSamePath("/about")}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/projects"
              onClick={() => handleScrollIfSamePath("/projects")}
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </NavLink>

            {contactLink()}
          </div>
        </div>
      </div>
    </nav>
  );
}
