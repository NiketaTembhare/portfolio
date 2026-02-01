import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import './Certificates.css';
import { Award, X } from 'lucide-react';

const certificates = [
    {
        id: 11,
        title: 'Innovanza \'25 Project Competition',
        issuer: 'Ramdeobaba University',
        image: 'cert-rbucon.jpg',
        description: 'Participated in National Level Project Competition RBUCON with "Voice-Controlled Mental Health Companion".'
    },
    {
        id: 12,
        title: 'UI Builder Award',
        issuer: 'Take It Ideas',
        image: 'cert-ui-builder.jpg',
        description: 'Awarded for outstanding performance in driving the UI Builder development project.'
    },
    {
        id: 1,
        title: 'HCL App Development',
        issuer: 'HCL Software',
        image: 'cert-hcl.jpg',
        description: 'Foundation training on Cross Platform App Development (Volt MX).'
    },
    {
        id: 2,
        title: 'MentHER Mentorship',
        issuer: 'Persistent & AWS',
        image: 'cert-persistent.jpg',
        description: 'Completed AWS Cloud Certification and MentHer mentorship program.'
    },
    {
        id: 3,
        title: 'Web Dev Internship',
        issuer: 'Take It Ideas',
        image: 'cert-takeit-intern.jpg',
        description: '3-month internship. Team Lead for UI Builder project.'
    },
    {
        id: 4,
        title: 'Python Data Science',
        issuer: 'Codemate IT Services',
        image: 'cert-codemate.jpg',
        description: 'Training and Internship program in Python & Data Science.'
    },
    {
        id: 5,
        title: 'NPTEL Data Science',
        issuer: 'IIT Madras',
        image: 'cert-nptel.jpg',
        description: 'Python for Data Science certification (Score: 50%).'
    },
    {
        id: 6,
        title: 'Dell AI Workflow',
        issuer: 'Dell Technologies',
        image: 'cert-dell.jpg',
        description: 'AI for Future Workforce - Intro to AI Course.'
    },
    {
        id: 7,
        title: 'Excellence in CSS',
        issuer: 'Take It Ideas',
        image: 'cert-css-excel.jpg',
        description: 'Award for conducting CSS training for Internship Batch 7.'
    },
    {
        id: 8,
        title: 'Avishkaar Hackathon',
        issuer: 'Cummins College',
        image: 'cert-avishkaar.jpg',
        description: 'Outstanding participation in Avishkaar 3.0 Hackathon.'
    },
    {
        id: 9,
        title: 'Aashayein 4.0',
        issuer: 'Stambh Organization',
        image: 'cert-stambh.jpg',
        description: 'Certificate of Appreciation for contributing to underpriveleged children.'
    },
    {
        id: 10,
        title: 'Blood Donation',
        issuer: 'Ministry of Health',
        image: 'cert-blood.jpg',
        description: 'Pledge to save lives through blood donation.'
    }
];

const Certificates = () => {
    const [selectedCert, setSelectedCert] = useState(null);

    return (
        <section id="certificates" className="section certificates-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">&lt;Certifications /&gt;</h2>
                </div>

                <div className="certificates-grid">
                    {certificates.map((cert) => (
                        <div
                            key={cert.id}
                            className="cert-card"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="cert-image-wrapper">
                                <img
                                    src={`${import.meta.env.BASE_URL}${cert.image}`}
                                    alt={cert.title}
                                    className="cert-img"
                                />
                                <div className="cert-overlay">
                                    <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>View Certificate</span>
                                </div>
                            </div>
                            <div className="cert-content">
                                <h3 className="cert-title">{cert.title}</h3>
                                <span className="cert-issuer">{cert.issuer}</span>
                                <p className="cert-desc">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal Portal */}
                {selectedCert && createPortal(
                    <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
                        <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
                                <X size={24} />
                            </button>
                            <h3 className="cert-modal-title">{selectedCert.title}</h3>
                            <div className="cert-modal-img-container">
                                <img
                                    src={`${import.meta.env.BASE_URL}${selectedCert.image}`}
                                    alt={selectedCert.title}
                                    className="cert-modal-img"
                                />
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
            </div>
        </section>
    );
};

export default Certificates;

