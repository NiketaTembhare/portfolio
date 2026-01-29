import React from 'react';
import { Cpu, Terminal, Globe, Shield, Code, Server } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: 'Languages',
        icon: <Code />,
        skills: ['Java', 'Python', 'C', 'JavaScript']
    },
    {
        title: 'Frontend',
        icon: <Globe />,
        skills: ['React.js', 'HTML/CSS', 'Volt MX']
    },
    {
        title: 'Backend & DB',
        icon: <Server />,
        skills: ['Spring Boot', 'Flask', 'MySQL', 'MongoDB', 'REST APIs']
    },
    {
        title: 'Tools & AI',
        icon: <Cpu />,
        skills: ['Git/GitHub', 'VS Code', 'TensorFlow', 'OpenCV', 'AWS']
    }
];

const Skills = () => {
    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">&lt;System_Capabilities /&gt;</h2>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="skill-category-card"
                        >
                            <div className="cat-header">
                                <span className="cat-icon">{category.icon}</span>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map(skill => (
                                    <span key={skill} className="skill-chip">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
