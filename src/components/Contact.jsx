import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">&lt;Init_Communication /&gt;</h2>
                </div>

                <div className="contact-container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="contact-info" style={{ width: '100%', maxWidth: '600px', textAlign: 'center', alignItems: 'center' }}>
                        <h3 className="terminal-heading">&gt; Contact_Details</h3>
                        <p>Open to SDE roles and freelance opportunities.</p>

                        <div className="info-item" style={{ justifyContent: 'center' }}>
                            <div className="icon-box"><Mail /></div>
                            <span>tembhareniketa@gmail.com</span>
                        </div>
                        <div className="info-item" style={{ justifyContent: 'center' }}>
                            <div className="icon-box"><Phone /></div>
                            <span>+91 8999622657</span>
                        </div>
                        <div className="info-item" style={{ justifyContent: 'center' }}>
                            <div className="icon-box"><MapPin /></div>
                            <span>Nagpur, India</span>
                        </div>

                        <div className="social-links-big" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                            <a href="https://github.com/NiketaTembhare" target="_blank" className="social-btn"><Github /> GitHub</a>
                            <a href="https://www.linkedin.com/in/niketa-tembhare-b86774255/" target="_blank" className="social-btn"><Linkedin /> LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
