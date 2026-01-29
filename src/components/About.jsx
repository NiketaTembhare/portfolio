import React from 'react';
import { Award, BookOpen, Code } from 'lucide-react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div
                    className="section-header"
                >
                    <h2 className="section-title">&lt;About /&gt;</h2>
                </div>

                <div className="about-content">
                    <div className="about-text-container">
                        <h3 className="sub-heading">Professional Summary</h3>
                        <p className="about-description">
                            Final-year B.Tech Computer Engineering student with a strong foundation in Java, DBMS, SQL, OOPs, and Web Development.
                            I have hands-on experience through internships at HCL and Persistent Systems, building real-world applications like
                            Apartment Management Systems and Banking Ledgers.
                        </p>
                        <p className="about-description">
                            I am seeking a Software Developer (SDE) role to contribute my strong coding, problem-solving, and project execution skills.
                            My passion lies in creating secure, scalable systems and exploring AI/ML applications.
                        </p>

                        <div className="achievements-box">
                            <h4 className="box-title"> <Award size={18} /> Key Achievements</h4>
                            <ul className="achievement-list">
                                <li>Reliance Foundation Scholar (Selected among 5,000 from 40k+ applicants)</li>
                                <li>RSP Commander (First woman leader, awarded by Nagpur Commissioner)</li>
                                <li>Evaluation Head, Coders Club (2024-25)</li>
                                <li>Team Leader in Aavishkar Hackathon</li>
                            </ul>
                        </div>
                    </div>

                    <div className="education-container">
                        <h3 className="sub-heading"><BookOpen size={20} /> Education Log</h3>
                        <div className="timeline">
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>B.Tech in Computer Engineering</h4>
                                    <span>Cummin's College of Engineering, Nagpur</span>
                                    <span className="year">2022 - 2026</span>
                                    <p className="grade">Performance: 71.07% (1st-6th Sem)</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>HSC (Class XII)</h4>
                                    <span>Maharashtra Board</span>
                                    <span className="year">2022</span>
                                    <p className="grade">80.17%</p>
                                </div>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <h4>CBSE (Class X)</h4>
                                    <span>St Paul High School, Nagpur</span>
                                    <span className="year">2020</span>
                                    <p className="grade">76.6%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
