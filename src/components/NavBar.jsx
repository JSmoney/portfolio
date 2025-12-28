import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav
      style={{
        padding: "1rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "4px solid #000",
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "var(--font-header)",
          fontSize: "24px",
          color: "var(--crt-text)",
          textDecoration: "none",
        }}
      >
        Portfolio
      </Link>
      <div
        style={{
          display: "flex",
          gap: "2rem",
          fontFamily: "var(--font-body)",
          fontSize: "20px",
        }}
      >
        <Link
          to="/"
          style={{
            color: "var(--crt-text)",
            textDecoration: location.pathname === "/" ? "underline" : "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          style={{
            color: "var(--crt-text)",
            textDecoration:
              location.pathname === "/about" ? "underline" : "none",
          }}
        >
          About Me
        </Link>
        <Link
          to="/projects"
          style={{
            color: "var(--crt-text)",
            textDecoration:
              location.pathname === "/projects" ? "underline" : "none",
          }}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          style={{
            color: "var(--crt-text)",
            textDecoration:
              location.pathname === "/contact" ? "underline" : "none",
          }}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
