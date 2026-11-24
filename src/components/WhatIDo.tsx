import "./styles/WhatIDo.css";

const services = [
  {
    icon: "⚙️",
    title: "Full-Stack Development",
    subtitle: "End-to-end web engineering",
    description:
      "Building scalable web applications from responsive frontends to high-performance backend APIs with secure database integrations. From UI to deployment.",
    tags: ["React", "Python", "Java", "FastAPI", "Flask", "Spring Boot", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    icon: "🧠",
    title: "Generative AI & LLMs",
    subtitle: "LLM orchestration & RAG pipelines",
    description:
      "Designing AI-powered systems with LLM orchestration, retrieval-augmented generation, vector search, and intelligent agents that reason over structured and unstructured data.",
    tags: ["LangChain", "LangGraph", "RAG", "ChromaDB", "Qdrant", "Vector Embeddings", "Prompt Engineering", "Groq"],
  },
  {
    icon: "🛡️",
    title: "AI Security & Guardrails",
    subtitle: "Protecting LLM applications",
    description:
      "Building enterprise-grade AI guardrail systems that defend against prompt injection, jailbreaks, and data leakage using policy rules and semantic similarity filters.",
    tags: ["AI Security", "LLM Guardrails", "Threat Modeling", "FastAPI", "MongoDB"],
  },
  {
    icon: "👁️",
    title: "ML & Computer Vision",
    subtitle: "Deep learning pipelines",
    description:
      "Developing machine learning models for image and video analysis. CNN-based feature extraction, real-time inference APIs, and model evaluation pipelines.",
    tags: ["TensorFlow", "OpenCV", "Python", "Flask", "CNN", "NumPy"],
  },
];

const WhatIDo = () => {
  return (
    <section className="whatiDo-section">
      <div className="whatiDo-container">
        {/* Header */}
        <div className="whatiDo-header">
          <span className="whatiDo-eyebrow">EXPERTISE</span>
          <h2 className="whatiDo-heading">
            What I<span className="whatiDo-heading-accent"> Do</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="whatiDo-grid">
          {services.map((s, i) => (
            <div className="whatiDo-card" key={i}>
              <div className="whatiDo-card-icon">{s.icon}</div>
              <h3 className="whatiDo-card-title">{s.title}</h3>
              <p className="whatiDo-card-subtitle">{s.subtitle}</p>
              <p className="whatiDo-card-desc">{s.description}</p>
              <div className="whatiDo-tags">
                {s.tags.map((tag, ti) => (
                  <span className="whatiDo-tag" key={ti}>{tag}</span>
                ))}
              </div>
              <div className="whatiDo-card-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
