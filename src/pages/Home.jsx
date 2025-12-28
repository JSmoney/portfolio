import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          maxWidth: "800px",
          width: "100%",
          padding: "2rem",
        }}
      >
        {/* Main Title */}
        <h1
          className="pixel-pop-in"
          style={{ margin: 0, fontSize: "4.5rem", lineHeight: "1.2" }}
        >
          JARED CAVE
        </h1>

        {/* Subtitle/Tagline */}
        <p
          className="line-by-line-text"
          style={{
            margin: 0,
            fontSize: "1.2rem",
            fontFamily: "var(--font-header)",
            opacity: 0.8,
          }}
        >
          Full Stack Blockchain Developer
        </p>

        {/* Navigation Buttons */}
        <div
          className="button-row"
          style={{
            marginTop: "1rem",
            gap: "1.5rem",
          }}
        >
          <Link
            to="/about"
            className="btn-8bit line-by-line"
            style={{ animationDelay: "0.2s" }}
          >
            About me
          </Link>
          <Link
            to="/projects"
            className="btn-8bit line-by-line"
            style={{ animationDelay: "0.3s" }}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="btn-8bit line-by-line"
            style={{ animationDelay: "0.4s" }}
          >
            Contact
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes pixelPopIn {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes lineByLine {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .pixel-pop-in {
          animation: pixelPopIn 0.4s ease-out forwards;
          opacity: 0;
        }

        .line-by-line {
          animation: lineByLine 0.5s ease-out forwards;
          opacity: 0;
        }

        .line-by-line-text {
          animation: lineByLine 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default Home;
