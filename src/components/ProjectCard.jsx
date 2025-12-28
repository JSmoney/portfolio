import React from "react";
import Container from "./Container";
import Badge from "./Badge";

function ProjectCard({ projectName, summary, techStack = [], gallery = [] }) {
  // Default gallery images if none provided (6 placeholders)
  const defaultGallery = Array(6).fill(null);
  const images = gallery.length > 0 ? gallery : defaultGallery;

  return (
    <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Main Project Container with Title */}
      <Container title={projectName || "Project Name"} className="is-centered">
        {/* Two Column Layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
          }}
        >
          {/* Left Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {/* SUMMARY Section */}
            <Container title="Summary">
              <p>{summary || "Blah blah blah"}</p>
            </Container>

            {/* TECH STACK Section */}
            <Container title="Tech Stack">
              <div
                style={{
                  display: "flex",
                  gap: "0.5em",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                {techStack.length > 0 &&
                  techStack.map((tech, index) => {
                    const techName = typeof tech === "string" ? tech : tech.name || tech;
                    return <Badge key={index} type="tech">{techName}</Badge>;
                  })}
              </div>
            </Container>
          </div>

          {/* Right Column - GALLERY */}
          <div>
            <Container title="Gallery">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gridTemplateRows: "repeat(3, 1fr)",
                  gap: "0.5rem",
                }}
              >
                {images.map((image, index) => (
                  <div
                    key={index}
                    style={{
                      aspectRatio: "1",
                      border: "2px solid var(--crt-text)",
                      backgroundColor: "var(--crt-bg)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      color: "var(--crt-text)",
                    }}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={`Gallery ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    ) : (
                      "X"
                    )}
                  </div>
                ))}
              </div>
            </Container>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProjectCard;

