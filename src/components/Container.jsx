import React from "react";

function Container({ title, children, className = "", ...props }) {
  const baseClasses = "nes-container with-title";
  const classes = [baseClasses, className].filter(Boolean).join(" ");

  return (
    <div className={classes} {...props}>
      {title && <p className="title">{title}</p>}
      {children}
    </div>
  );
}

export default Container;











