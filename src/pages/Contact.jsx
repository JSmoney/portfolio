import React, { useState } from "react";
import instaIcon from "../assets/Social Media Icon - Pixel Art 1.1/insta_icon.png";
import scIcon from "../assets/Social Media Icon - Pixel Art 1.1/sc_icon.png";
import linkedinIcon from "../assets/Social Media Icon - Pixel Art 1.1/linkedin_icon.png";
import githubIcon from "../assets/Social Media Icon - Pixel Art 1.1/github_icon.png";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend logic yet - just prevent default
    console.log("Form submitted:", formData);
  };

  const contactLinks = [
    {
      name: "SoundCloud",
      url: "https://soundcloud.com/yourusername",
      iconType: "image",
      iconPath: scIcon,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourusername",
      iconType: "image",
      iconPath: linkedinIcon,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      iconType: "image",
      iconPath: instaIcon,
    },
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      iconType: "image",
      iconPath: githubIcon,
    },
  ];

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
        Contact
      </h1>

      <div className="contact-layout">
        {/* Left Column - Content */}
        <div className="contact-content">
          {/* Text/Blurb Section */}
          <div className="nes-container with-title contact-text-section">
            <p className="title pixel-pop-in">Here to hear</p>
            <p className="line-by-line-text" style={{ fontSize: "0.75em" }}>
              Feel free to reach out if you'd like to collaborate, discuss
              projects, or just say hello. I'm always open to new opportunities
              and conversations.
            </p>
          </div>

          {/* Social/Info Section */}
          <div className="nes-container with-title contact-socials">
            <p className="title pixel-pop-in">Find me</p>
            <div className="contact-links">
              {contactLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link-item line-by-line"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.iconType === "image" ? (
                    <img
                      src={link.iconPath}
                      alt={link.name}
                      className="social-icon-image pixel-pop-in"
                    />
                  ) : link.iconType === "placeholder" ? (
                    <span className="nes-icon-placeholder pixel-pop-in"></span>
                  ) : (
                    <i className={`nes-icon ${link.iconType} pixel-pop-in`}></i>
                  )}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="contact-form-section">
          <div className="nes-container with-title">
            <p className="title pixel-pop-in">Ask a question</p>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="nes-input"
                    required
                  />
                </div>
                <div className="form-field">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="nes-input"
                    required
                  />
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="nes-input"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="nes-input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="nes-textarea"
                  rows="5"
                  required
                ></textarea>
              </div>

              <button type="submit" className="nes-btn is-primary">
                Submit
              </button>
            </form>
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

          .contact-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
          }

          .contact-content {
            display: flex;
            flex-direction: column;
            gap: 2rem;
          }

          .contact-text-section {
            margin-bottom: 0;
          }

          .contact-socials {
            margin-top: 0;
          }

          .contact-links {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .contact-link-item {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            text-decoration: none;
            color: inherit;
          }

          .contact-link-item:hover {
            text-decoration: underline;
          }

          .contact-link-item .nes-icon {
            font-size: 2em !important;
            width: 1em !important;
            height: 1em !important;
            display: inline-block;
            vertical-align: middle;
          }

          .social-icon-image {
            width: 2em;
            height: 2em;
            object-fit: cover;
            vertical-align: middle;
            display: block;
          }

          .nes-icon-placeholder {
            display: inline-block;
            width: 2em;
            height: 2em;
            min-width: 32px;
            min-height: 32px;
            background-color: #000;
            vertical-align: middle;
          }

          .contact-form-section {
            width: 100%;
          }

          .contact-form {
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }

          .form-field {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .form-field label {
            margin-bottom: 0;
          }

          .contact-form .nes-input,
          .contact-form .nes-textarea {
            background-color: var(--crt-bg);
          }

          @media (max-width: 768px) {
            .contact-layout {
              display: flex;
              flex-direction: column;
              gap: 2rem;
            }

            .contact-content {
              order: 1;
            }

            .contact-form-section {
              order: 2;
            }

            .form-row {
              display: flex;
              flex-direction: column;
              gap: 1rem;
            }
          }
        `}</style>
    </section>
  );
}

export default Contact;
