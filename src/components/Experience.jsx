import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import './Experience.css';

const experiences = [
    {
        role: 'Cross Platform App Development Trainee',
        company: 'HCL (Project Sunshine)',
        duration: 'Apr 2025',
        details: [
            'Completed training in HCL Volt MX for cross-platform app development.',
            'Developed hands-on understanding of hybrid mobile apps and rapid UI creation.',
            'Understanding of app workflows and deployment basics.'
        ]
    },
    {
        role: 'Project Intern',
        company: 'Persistent Systems (MentHer + AWS)',
        duration: 'Dec 2024 – Feb 2025',
        details: [
            'Built an Apartment Management System with resident communication and maintenance handling.',
            'Designed key modules for resident management and issue tracking.',
            'Aligned with real-world workflows using AWS/Java.'
        ]
    },
    {
        role: 'Software Development Intern',
        company: 'Take It Ideas Innovative Solutions',
        duration: 'Jul 2024 – Sept 2024',
        details: [
            'Worked on Rapid Development Framework (RDF) projects.',
            'Assisted in building responsive UI components and JSON-based workflows.'
        ]
    }
];

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">&lt;Experience_Log /&gt;</h2>
                </div>

                <div className="experience-list">
                    {experiences.map((exp) => (
                        <div
                            key={exp.role}
                            className="experience-card"
                        >
                            <div className="exp-header">
                                <div className="role-company">
                                    <h3>{exp.role}</h3>
                                    <span className="company">{exp.company}</span>
                                </div>
                                <div className="duration">
                                    <Calendar size={16} /> {exp.duration}
                                </div>
                            </div>
                            <ul className="exp-details">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
