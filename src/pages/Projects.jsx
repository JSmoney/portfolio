import React, { useState, useEffect } from "react";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [textKey, setTextKey] = useState(0);

  const categoryDescriptions = {
    Mobile: "A collection of mobile first projects built in React Native.",
    Web2: "A collection of traditional web applications built with modern frameworks.",
    Web3: "A collection of blockchain and Web3 projects exploring decentralized technologies.",
    Creative:
      "A collection of creative projects spanning design, art, and experimental work.",
  };

  const projectsData = {
    Mobile: [
      {
        name: "Project One",
      },
      {
        name: "Project Two",
      },
    ],
    Web2: [
      {
        name: "Project One",
      },
      {
        name: "Project Two",
      },
    ],
    Web3: [
      {
        name: "Project One",
      },
      {
        name: "Project Two",
      },
    ],
    Creative: [
      {
        name: "Project One",
      },
      {
        name: "Project Two",
      },
    ],
  };

  const categories = Object.keys(projectsData);
  const currentCategory = selectedCategory || activeCategory;
  const currentProjects = selectedCategory
    ? projectsData[selectedCategory]
    : null;
  const currentProject =
    activeProject || (currentProjects ? currentProjects[0] : null);
  const currentSummary = !selectedCategory
    ? categoryDescriptions[currentCategory || categories[0]]
    : null;

  useEffect(() => {
    setTextKey((prev) => prev + 1);
  }, [currentSummary, selectedCategory, currentProject]);

  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  const handleProjectHover = (project) => {
    setActiveProject(project);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setActiveProject(null); // Reset active project when category changes
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setActiveProject(null);
    setActiveCategory(null);
  };

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
        style={{ textAlign: "center", marginBottom: "2rem", fontSize: "2em" }}
      >
        Projects
      </h1>

      <div className="projects-layout">
        {/* Left Column - Menu + Button */}
        <div className="left-column">
          {/* Left Container - Projects */}
          <div className="nes-container with-title projects-container">
            {selectedCategory ? (
              <p className="title pixel-pop-in">
                <span
                  className="clickable-title"
                  onClick={handleBackToCategories}
                  style={{ cursor: "pointer", textDecoration: "underline" }}
                >
                  Projects
                </span>{" "}
                / {selectedCategory}
              </p>
            ) : (
              <p className="title pixel-pop-in">Projects</p>
            )}
            {!selectedCategory ? (
              <ul className="categories-list">
                {categories.map((category, index) => (
                  <li
                    key={category}
                    className="category-item line-by-line"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => handleCategoryHover(category)}
                    onClick={() => handleCategoryClick(category)}
                  >
                    <span
                      className={`pixel-arrow ${
                        activeCategory === category ? "visible" : "hidden"
                      }`}
                    >
                      ▸
                    </span>
                    <span className="menu-item-text">{category}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="projects-list">
                {currentProjects?.map((project, index) => (
                  <li
                    key={index}
                    className="project-item line-by-line"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => handleProjectHover(project)}
                  >
                    <span
                      className={`pixel-arrow ${
                        activeProject === project ? "visible" : "hidden"
                      }`}
                    >
                      ▸
                    </span>
                    <span className="menu-item-text">{project.name}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right Container - Summary */}
        <div className="nes-container with-title preview-container">
          <p className="title pixel-pop-in">Summary</p>
          <div className="preview-content">
            <div className="preview-image">
              {activeProject ? (
                `${activeProject.name} Preview`
              ) : (
                <div className="select-project-text">Select a project</div>
              )}
            </div>
            <div className="preview-text-area">
              {!selectedCategory && currentSummary ? (
                <p key={textKey} className="preview-summary line-by-line-text">
                  {currentSummary}
                </p>
              ) : selectedCategory ? (
                currentProject ? (
                  <p className="preview-placeholder"></p>
                ) : (
                  <p
                    key={textKey}
                    className="preview-placeholder line-by-line-text"
                  >
                    Select a project
                  </p>
                )
              ) : (
                <p
                  key={textKey}
                  className="preview-placeholder line-by-line-text"
                >
                  Select a project
                </p>
              )}
            </div>
          </div>
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

          .projects-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: stretch;
          }

          .left-column {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            height: 100%;
          }

          .projects-container {
            width: 100%;
            flex: 1;
          }

          .preview-container {
            width: 100%;
            min-height: 400px;
          }

          .categories-list,
          .projects-list {
            list-style: none;
            padding: 0;
            margin: 1rem 0 0 0;
            display: flex;
            flex-direction: column;
            gap: 0;
          }

          .category-item,
          .project-item {
            display: flex;
            align-items: center;
            cursor: pointer;
            padding: 0;
            margin: 0;
            line-height: 1.6;
          }

          .pixel-arrow {
            display: inline-block;
            font-family: monospace;
            font-size: 1em;
            line-height: 1;
            width: 1em;
            text-align: center;
            margin-right: 0.5rem;
          }

          .pixel-arrow.hidden {
            display: none;
          }

          .pixel-arrow.visible {
            display: inline-block;
          }

          .menu-item-text {
            opacity: 0;
            animation: lineByLine 0.5s ease-out forwards;
          }

          .preview-content {
            display: flex;
            flex-direction: column;
            gap: 1rem;
            margin-top: 1rem;
          }

          .preview-image {
            width: 75%;
            aspect-ratio: 1;
            background-color: var(--crt-primary);
            border: 2px solid #000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            text-align: center;
            margin: 0 auto 1.5rem;
            position: relative;
            overflow: hidden;
          }

          .select-project-text {
            font-size: 0.9375em;
            color: #fff;
            text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000;
            animation: slowFlash 2s ease-in-out infinite;
          }

          @keyframes slowFlash {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.3;
            }
          }

          .preview-text-area {
            min-height: 4.5em;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }

          .preview-summary {
            margin: 0;
            line-height: 1.6;
            font-size: 0.75em;
            text-align: center;
          }

          .preview-placeholder {
            text-align: center;
            padding: 2rem;
            margin: 0;
            color: #888;
            font-size: 0.75em;
          }

          @media (max-width: 768px) {
            .projects-layout {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }

            .left-column {
              order: 1;
            }

            .preview-container {
              order: 2;
            }
          }
        `}</style>
    </section>
  );
}

export default Projects;
