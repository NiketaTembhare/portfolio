import "./styles/About.css";

const highlights = [
  { icon: "🏆", text: "Reliance Foundation Scholar — top 5,000 from 40,000+ applicants" },
  { icon: "🎖️", text: "First woman RSP Commander — awarded by Nagpur Commissioner" },
  { icon: "💻", text: "Evaluation Head, Coders Club (2024–25)" },
  { icon: "🎓", text: "B.Tech Computer Engineering — Cummins College, Nagpur" },
];

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-glow" />
      <div className="about-inner">

        {/* Left: label + headline */}
        <div className="about-left">
          <span className="about-eyebrow">WHO I AM</span>
          <h2 className="about-heading">
            Full-Stack &<br />
            <span className="about-heading-accent">GenAI Developer</span>
          </h2>
          <p className="about-left-sub">
            Building intelligent, end-to-end systems — from polished UIs to
            production AI pipelines.
          </p>
        </div>

        {/* Right: body copy + highlights + CTA */}
        <div className="about-right">
          <p className="about-para">
            Computer Engineering graduate from{" "}
            <strong>Cummins College of Engineering, Nagpur</strong> with
            hands-on experience in Generative AI, AI Security, and Full-Stack
            Development. Skilled in Python, SQL, FastAPI, MongoDB, vector
            databases, RAG, and LLM-powered applications. Experienced in
            building scalable APIs, AI guardrails, and enterprise GenAI
            solutions through internships at{" "}
            <span className="about-highlight-text">TCS</span> and{" "}
            <span className="about-highlight-text">Persistent Systems</span>.
          </p>

          <ul className="about-highlights">
            {highlights.map((h, i) => (
              <li className="about-highlight-item" key={i}>
                <span className="about-highlight-icon">{h.icon}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>

          <a
            href="https://www.linkedin.com/in/niketa-tembhare-b86774255/"
            target="_blank"
            rel="noopener noreferrer"
            className="about-cta"
          >
            Let's Connect →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
