import React from "react";

function Badge({ children, type = "tech", className = "" }) {
  // Technology badges
  const techBadges = [
    "React",
    "JavaScript",
    "Tailwind",
    "CSS",
    "Node",
    "Node.js",
    "HTML",
    "Full-stack",
    "Python",
  ];
  // Skill badges (black)
  const skillBadges = [
    "Front-end",
    "Full-Stack",
    "AI",
    "UX",
    "Content",
    "Automation",
    "Design",
  ];
  // Interpersonal/Business badges (sage green)
  const interpersonalBadges = [
    "Sales",
    "Recruitment",
    "Negotiation",
    "Leadership",
  ];

  const badgeText = typeof children === "string" ? children : "";
  const isTech = techBadges.includes(badgeText);
  const isSkill = skillBadges.includes(badgeText);
  const isInterpersonal = interpersonalBadges.includes(badgeText);

  // Determine badge class based on type and content
  let badgeClass = "nes-badge";
  let spanClass = "";

  if (type === "interpersonal" || type === "business" || isInterpersonal) {
    badgeClass += " interpersonal-badge";
    spanClass = "is-success"; // Use is-success for sage green, will be styled with CSS
  } else if (type === "skill" || isSkill) {
    badgeClass += " skill-badge";
    spanClass = "is-dark"; // Use is-dark for black
  } else if (isTech) {
    // Add technology-specific class for custom styling
    badgeClass += ` tech-${badgeText
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/\./g, "-")}`;
    spanClass = "is-primary"; // Default, will be overridden by CSS
  } else {
    spanClass = "is-primary"; // Default for other tech badges
  }

  const finalClass = [badgeClass, className].filter(Boolean).join(" ");

  return (
    <span className={finalClass}>
      <span className={spanClass}>{children}</span>
    </span>
  );
}

export default Badge;
