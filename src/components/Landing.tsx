import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <section className="hero-section" id="landingDiv">
        {/* Left content panel */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Available for Work
          </div>

          <h1 className="hero-title">
            BUILDING<br />
            <span className="hero-title-accent">INTERFACES</span><br />
            THAT INSPIRE
          </h1>

          <p className="hero-subtitle">
            Full-Stack Developer &amp; GenAI Engineer crafting end-to-end web
            applications, LLM pipelines, and intelligent AI systems.
          </p>

          <div className="hero-actions">
            <a href="#work" className="hero-btn-primary">
              View My Work
            </a>
            <a href="mailto:tembhareniketa@gmail.com" className="hero-btn-secondary">
              Email Me
            </a>
          </div>
        </div>

        {/* Right photo panel */}
        <div className="hero-photo-panel">
          <div className="hero-glow" />
          <img
            src="/image.png"
            alt="Niketa Tembhare"
            className="hero-photo"
          />
          {/* Name card (bottom-right of photo panel) */}
          <div className="hero-namecard">
            <span className="hero-namecard-name">NIKETA TEMBHARE</span>
            <span className="hero-namecard-role">Full-Stack &amp; GenAI Developer</span>
          </div>
        </div>

        {children}
      </section>
    </>
  );
};

export default Landing;
