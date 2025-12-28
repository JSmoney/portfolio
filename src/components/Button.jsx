import React from "react";

function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  target,
  rel,
  className = "",
  disabled = false,
  type = "button",
  ...props
}) {
  const variantClasses = {
    primary: "nes-btn is-primary",
    success: "nes-btn is-success",
    warning: "nes-btn is-warning",
    error: "nes-btn is-error",
    default: "nes-btn",
  };

  const sizeClasses = {
    sm: "is-small",
    md: "",
    lg: "is-medium",
  };

  // If disabled, override variant to use disabled class
  const finalVariant = disabled ? "disabled" : variant;
  const variantClass = disabled
    ? "nes-btn is-disabled"
    : variantClasses[finalVariant] || variantClasses.default;
  const sizeClass = sizeClasses[size] || "";

  const classes = [variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
