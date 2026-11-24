import { useEffect, useRef } from "react";
import "./styles/TechStack.css";

const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "SQL", icon: "🗄️" },
      { name: "JavaScript", icon: "⚡" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: "⚛️" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "Vite", icon: "⚡" },
    ],
  },
  {
    title: "Backend & DB",
    items: [
      { name: "FastAPI", icon: "🚀" },
      { name: "Flask", icon: "🧪" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "REST APIs", icon: "🔗" },
    ],
  },
  {
    title: "AI / ML",
    items: [
      { name: "LangChain", icon: "🔗" },
      { name: "LangGraph", icon: "📊" },
      { name: "RAG", icon: "🧠" },
      { name: "ChromaDB", icon: "💎" },
      { name: "Qdrant", icon: "🔍" },
      { name: "TensorFlow", icon: "🤖" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Prompt Eng.", icon: "✍️" },
    ],
  },
  {
    title: "Tools & Cloud",
    items: [
      { name: "Git", icon: "📝" },
      { name: "Postman", icon: "📮" },
      { name: "AWS", icon: "☁️" },
      { name: "VS Code", icon: "💻" },
      { name: "Mendix", icon: "🔧" },
    ],
  },
];

const TechStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tech-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".tech-category");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="techstack" ref={containerRef}>
      <div className="techstack-inner">
        <div className="techstack-header">
          <span className="techstack-eyebrow">TOOLKIT</span>
          <h2 className="techstack-heading">
            My <span className="techstack-heading-accent">Tech Stack</span>
          </h2>
        </div>
        <div className="tech-grid">
          {techCategories.map((category, catIndex) => (
            <div
              className="tech-category"
              key={category.title}
              style={{ transitionDelay: `${catIndex * 0.08}s` }}
            >
              <h3 className="tech-category-title">{category.title}</h3>
              <div className="tech-items">
                {category.items.map((item) => (
                  <div className="tech-item" key={item.name}>
                    <span className="tech-item-icon">{item.icon}</span>
                    <span className="tech-item-name">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
