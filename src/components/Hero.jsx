import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { ArrowRight, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="hero-background">
                <div className="grid-overlay"></div>
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="container hero-container">
                <div
                    className="hero-content"
                >
                    <div className="badge">
                        <Terminal size={14} style={{ marginRight: '8px' }} />
                        System Online
                    </div>
                    <h1 className="hero-title">
                        Hello, I am <br />
                        <span className="gradient-text">Niketa Tembhare</span>
                    </h1>
                    <h2 className="hero-subtitle">
                        <span className="prompt">&gt;</span>
                        <span className="typewriter-text">
                            <Typewriter
                                words={['Web Developer', 'Software Engineer', 'AI/ML Learner']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={80}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </span>
                    </h2>
                    <p className="hero-description">
                        Final-year Computer Engineering student building high-performance systems with Java, Python, and React.
                        Focused on scalable web applications and AI-driven solutions.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            View Projects <ArrowRight size={18} />
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </div>
                </div>

                <div
                    className="hero-visual"
                >
                    <div className="profile-wrapper">
                        <div className="profile-frame">
                            <img src={`${import.meta.env.BASE_URL}profile.jpg`} alt="Niketa Tembhare" className="profile-img" />
                            <div className="scan-line"></div>
                        </div>
                        <div className="tech-ring ring-1"></div>
                        <div className="tech-ring ring-2"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
