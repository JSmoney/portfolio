import React from "react";
import Badge from "../components/Badge";

function About() {
  return (
    <section
      style={{
        maxWidth: "1024px",
        margin: "0 auto",
        padding: "2rem 1rem",
      }}
    >
      <h1
        className="pixel-pop-in"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "2em",
        }}
      >
        About Me
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
        }}
        className="about-me-grid"
      >
        {/* Top - Bio with Avatar (spans both columns) */}
        <div
          className="nes-container with-title about-me-bio"
          style={{ gridColumn: "span 2" }}
        >
          <p className="title pixel-pop-in">Bio</p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <div style={{ flex: 1 }}>
              <p
                className="line-by-line-text"
                style={{
                  fontSize: "0.75em",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                I'm a budding full-stack developer with a growing focus on
                blockchain and Web3 technologies. I'm largely self-taught
                through online resources and books, and I'm currently completing
                the Codecademy Full-Stack Developer pathway to strengthen my
                core foundations before specialising further in Web3.
              </p>
              <p
                className="line-by-line-text"
                style={{ fontSize: "0.75em", lineHeight: "1.6" }}
              >
                I'm naturally creative and curious, and I built this portfolio
                as a single home for both my development work and my wider
                creative projects — a place to share progress, experiments, and
                ideas as they evolve.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "250px",
                minHeight: "250px",
                flexShrink: 0,
                backgroundColor: "blue",
              }}
            >
              <img
                src="/avatar/day_avatar.png"
                alt="Pixel avatar of Jared Cave"
                style={{
                  width: "250px",
                  height: "250px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        {/* Bottom Left - Skills */}
        <div className="nes-container with-title about-me-skills">
          <p className="title pixel-pop-in">Skills</p>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem",
              fontSize: "0.75em",
              justifyContent: "center",
            }}
          >
            {/* Technologies */}
            <Badge type="tech">JavaScript</Badge>
            <Badge type="tech">React</Badge>
            <Badge type="tech">CSS</Badge>
            <Badge type="tech">Tailwind</Badge>
            <Badge type="tech">HTML</Badge>
            <Badge type="tech">Node.js</Badge>
            <Badge type="tech">Full-stack</Badge>
            {/* Skills */}
            <Badge type="skill">UX</Badge>
            {/* Interpersonal/Business */}
            <Badge type="interpersonal">Sales</Badge>
            <Badge type="interpersonal">Recruitment</Badge>
            <Badge type="interpersonal">Negotiation</Badge>
            <Badge type="interpersonal">Leadership</Badge>
          </div>

          {/* Recent Studies Section */}
          <div className="recent-studies-container">
            <div className="recent-studies-content">
              <h3 className="recent-studies-title pixel-pop-in">
                Recent Studies
              </h3>
              <div className="study-row">
                <div className="study-label">
                  Web3
                  <br />
                  Intro
                </div>
                <div className="study-progress">
                  <progress
                    className="nes-progress"
                    value="100"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div className="study-row">
                <div className="study-label">Full-stack Engineer</div>
                <div className="study-progress">
                  <progress
                    className="nes-progress"
                    value="41"
                    max="100"
                  ></progress>
                </div>
              </div>
              <div className="study-row">
                <div className="study-label">UX Designer</div>
                <div className="study-progress">
                  <progress
                    className="nes-progress"
                    value="19"
                    max="100"
                  ></progress>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Right - Objectives */}
        <div className="nes-container with-title about-me-objectives">
          <p className="title pixel-pop-in">Objectives</p>
          <p
            className="line-by-line-text"
            style={{
              fontSize: "0.75em",
              lineHeight: "1.6",
              marginBottom: "1rem",
            }}
          >
            My current priority is learning through hands on building. I am
            developing strong foundations in full stack development while
            exploring how blockchain and Web3 can be applied in practical, real
            world ways. I am especially drawn to work at the intersection of
            technology and people, with interests in diversity, inclusion,
            neurodiversity, and social mobility.
          </p>
          <p
            className="line-by-line-text"
            style={{ fontSize: "0.75em", lineHeight: "1.6" }}
          >
            Over time, my aim is to bring together my career experience gained
            in data recruitment, my growing development skillset, and my
            creative instincts to build thoughtful, human centred products while
            continuing to explore and evolve.
          </p>
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

          .line-by-line-text {
            animation: lineByLine 0.6s ease-out forwards;
            opacity: 0;
          }

          .line-by-line-text:nth-of-type(1) {
            animation-delay: 0.1s;
          }

          .line-by-line-text:nth-of-type(2) {
            animation-delay: 0.3s;
          }

          .recent-studies-container {
            margin-top: 1.5rem;
          }

          .recent-studies-content {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            background-color: #d3d3d3;
            padding: 1rem;
            border-radius: 0;
          }

          .recent-studies-title {
            text-align: center;
            margin: 0 0 0.5rem 0;
            font-size: 0.85em;
            display: inline-block;
          }

          .study-row {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 1rem;
            align-items: center;
            justify-items: center;
          }

          .study-label {
            font-size: 0.75em;
            text-align: center;
            width: 100%;
          }

          .study-progress {
            width: 100%;
          }

          .study-progress .nes-progress {
            width: 100%;
            height: 1.5rem;
          }

          @media (max-width: 768px) {
            .study-row {
              grid-template-columns: 1fr;
              gap: 0.5rem;
            }

            .study-label {
              margin-bottom: 0.25rem;
            }

            .about-me-grid {
              display: flex !important;
              flex-direction: column;
              gap: 1.5rem;
            }
            
            .about-me-grid > *:nth-child(1) {
              order: 1;
              grid-column: span 1 !important;
            }
            .about-me-grid > *:nth-child(2) {
              order: 2;
            }
            .about-me-grid > *:nth-child(3) {
              order: 3;
            }
          }
        `}</style>
    </section>
  );
}

export default About;
