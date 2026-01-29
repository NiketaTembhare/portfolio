import React from 'react';
import { ExternalLink, Github, Terminal } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: 'Apartment Management System',
        description: 'Digitized resident operations, maintenance requests, and notice management. Implemented CRUD workflows and structured modules for issue tracking and communication.',
        tags: ['Java', 'MySQL', 'AWS', 'HTML/CSS'],
        featured: true,
    },
    {
        id: 2,
        title: 'Banking Ledger Application',
        description: 'Full-stack dashboard for secure transaction management and real-time balance updates. Features automated ID generation and validation logic.',
        tags: ['Spring Boot', 'React', 'MongoDB'],
        featured: true,
    },
    {
        id: 3,
        title: 'Video Tampering Detection',
        description: 'Security system detecting video tampering using feature extraction. Uses Flask for backend and OpenCV/TensorFlow for frame processing.',
        tags: ['Python', 'Flask', 'TensorFlow', 'OpenCV'],
        featured: true,
    },
    {
        id: 4,
        title: 'AI Mental Health Companion',
        description: 'Voice-controlled platform with chatbot support and real-time data analysis. Built for a Hackathon 2025 project.',
        tags: ['JavaScript', 'REST APIs', 'MySQL'],
        featured: false,
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects-section">
            <div className="container">
                <div
                    className="section-header"
                >
                    <h2 className="section-title">&lt;Projects /&gt;</h2>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div
                            key={project.id}
                            className="project-card"
                        >
                            <div className="card-top-bar">
                                <div className="traffic-lights">
                                    <span></span><span></span><span></span>
                                </div>
                                <div className="code-label"><Terminal size={12} /> execution_id: 0{project.id}</div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href="#" className="link-btn">
                                        <Github size={16} /> Code
                                    </a>
                                    <a href="#" className="link-btn">
                                        <ExternalLink size={16} /> Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
