import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";

const projects = [
  {
    number: "01",
    name: "Warehouse AI",
    category: "AI / Full-Stack",
    description:
      "Intelligent warehouse management assistant powered by LangChain & Groq. Accepts natural language queries against a PostgreSQL database with semantic search via ChromaDB.",
    tools: ["FastAPI", "LangChain", "Groq", "PostgreSQL", "ChromaDB", "SQLAlchemy"],
    github: "https://github.com/NiketaTembhare/Warehouse-AI",
    deploy: null,
  },
  {
    number: "02",
    name: "SecureShield AI",
    category: "AI Security",
    description:
      "Enterprise-grade AI guardrail platform defending LLM applications against prompt injection, jailbreaks, and data leakage using vector embeddings and policy rules.",
    tools: ["Python", "FastAPI", "Vector Embeddings", "MongoDB", "LLM Security"],
    github: "https://github.com/NiketaTembhare/SecureShield-AI",
    deploy: null,
  },
  {
    number: "03",
    name: "AI Death Arena",
    category: "Multiplayer / Real-Time",
    description:
      "Real-time multiplayer battle game where AI agents compete. Built with React 19, Supabase WebSockets for live state sync, and the Web Audio API for immersive sound design.",
    tools: ["React 19", "Supabase", "WebSockets", "Web Audio API"],
    github: null,
    deploy: "https://ai-death-arena.vercel.app/",
  },
  {
    number: "04",
    name: "ApexWealth AI",
    category: "AI / FinTech",
    description:
      "Graph-RAG powered financial advisor that visualises knowledge graphs with Cytoscape.js. LangGraph orchestrates multi-step reasoning over a Qdrant vector store.",
    tools: ["React", "FastAPI", "LangGraph", "Graph RAG", "Qdrant", "Cytoscape.js"],
    github: null,
    deploy: "https://apex-wealth-one.vercel.app/",
  },
  {
    number: "05",
    name: "Video Tampering Detection",
    category: "ML / Computer Vision",
    description:
      "Deep-learning pipeline that detects manipulated video frames using CNN-based feature extraction. Flask API exposes real-time predictions with per-frame confidence scores.",
    tools: ["Python", "Flask", "TensorFlow", "OpenCV"],
    github: "https://github.com/NiketaTembhare/VideoDetection",
    deploy: null,
  },
];

const Work = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-container">
        {/* Header */}
        <div className="work-header">
          <span className="work-eyebrow">SELECTED PROJECTS</span>
          <h2 className="work-heading">
            My <span className="work-heading-accent">Work</span>
          </h2>
        </div>

        {/* Projects grid */}
        <div className="work-grid">
          {projects.map((project, index) => (
            <article className="work-card" key={index}>
              {/* Top row: number + category */}
              <div className="work-card-top">
                <span className="work-num">{project.number}</span>
                <span className="work-cat">{project.category}</span>
              </div>

              {/* Title */}
              <h3 className="work-name">{project.name}</h3>

              {/* Description */}
              <p className="work-desc">{project.description}</p>

              {/* Tool tags */}
              <div className="work-tags">
                {project.tools.map((tool, ti) => (
                  <span className="work-tag" key={ti}>{tool}</span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="work-actions">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-ghost"
                    aria-label={`${project.name} GitHub`}
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.deploy && (
                  <a
                    href={project.deploy}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-btn work-btn-primary"
                    aria-label={`${project.name} live demo`}
                  >
                    Live Demo <MdArrowOutward />
                  </a>
                )}
              </div>

              {/* Hover accent bar */}
              <div className="work-card-bar" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
