import "./styles/Career.css";

const experiences = [
  {
    year: "2024",
    role: "Software Development Intern",
    company: "Take It Ideas Innovative Solutions",
    description:
      "Worked on Rapid Development Framework (RDF) projects. Built responsive UI components and JSON-based workflows. Served as Team Lead for the UI Builder development project.",
    tags: ["UI Development", "RDF", "JSON Workflows", "Team Lead"],
  },
  {
    year: "2025",
    role: "Project Intern — AWS MentHer Program",
    company: "Persistent Systems",
    description:
      "Developed a Python-based Video Tampering Detection System with Flask APIs for video upload, frame extraction, and authenticity analysis. Applied CNN-based image processing to identify tampering. Gained exposure to AWS deployment and REST API design.",
    tags: ["Python", "Flask", "TensorFlow", "OpenCV", "AWS", "REST APIs"],
  },
  {
    year: "NOW",
    role: "AI Intern",
    company: "Tata Consultancy Services (TCS)",
    description:
      "Architected SecureShield AI — a multi-layer LLM security gateway featuring prompt injection detection, PII protection, and semantic validation for enterprise GenAI applications. Extended AI security work to the Warehouse AI project, contributing a LangChain-based SQL agent and RAG-driven SOP assistant for secure, read-only enterprise data access.",
    tags: ["LangChain", "RAG", "AI Security", "LLM", "FastAPI", "GenAI"],
  },
];

const Career = () => {
  return (
    <section className="career-section" id="career">
      <div className="career-container">

        {/* Header */}
        <div className="career-header">
          <span className="career-eyebrow">JOURNEY</span>
          <h2 className="career-heading">
            Career &amp; <span className="career-heading-accent">Experience</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="career-timeline">
          <div className="career-timeline-line" />

          {experiences.map((exp, i) => (
            <div className="career-entry" key={i}>
              {/* Dot on timeline */}
              <div className="career-dot-wrap">
                <div className="career-dot" />
              </div>

              {/* Card */}
              <div className="career-card">
                <div className="career-card-top">
                  <span className="career-year">{exp.year}</span>
                  <div>
                    <h3 className="career-role">{exp.role}</h3>
                    <p className="career-company">{exp.company}</p>
                  </div>
                </div>
                <p className="career-desc">{exp.description}</p>
                <div className="career-tags">
                  {exp.tags.map((t, ti) => (
                    <span className="career-tag" key={ti}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
