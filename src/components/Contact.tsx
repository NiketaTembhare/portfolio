import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">

        {/* Header */}
        <div className="contact-header">
          <span className="contact-eyebrow">GET IN TOUCH</span>
          <h2 className="contact-heading">
            Let's <span className="contact-heading-accent">Connect</span>
          </h2>
          <p className="contact-tagline">
            Open to SDE roles, AI/ML opportunities &amp; freelance projects.
          </p>
        </div>

        {/* Cards row */}
        <div className="contact-grid">

          {/* Email + Phone */}
          <div className="contact-card">
            <span className="contact-card-label">REACH OUT</span>
            <a href="mailto:tembhareniketa@gmail.com" className="contact-link" data-cursor="disable">
              tembhareniketa@gmail.com <MdArrowOutward />
            </a>
            <a href="tel:+918999622657" className="contact-link" data-cursor="disable">
              +91 89996 22657 <MdArrowOutward />
            </a>
            <span className="contact-location">📍 Nagpur, India</span>
          </div>

          {/* Social */}
          <div className="contact-card">
            <span className="contact-card-label">SOCIAL</span>
            <a
              href="https://github.com/NiketaTembhare"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              data-cursor="disable"
            >
              <FaGithub /> GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/niketa-tembhare-b86774255/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-social-link"
              data-cursor="disable"
            >
              <FaLinkedinIn /> LinkedIn <MdArrowOutward />
            </a>
          </div>

          {/* Credit / footer */}
          <div className="contact-card contact-card-credit">
            <p className="contact-credit-title">
              Designed &amp; Developed by<br />
              <span className="contact-credit-name">Niketa Tembhare</span>
            </p>
            <span className="contact-copyright">
              <MdCopyright /> 2026
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
