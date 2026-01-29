import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    // ... same logic as before, just updating JSX
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSuccess(true);
            setTimeout(() => setSuccess(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">&lt;Init_Communication /&gt;</h2>
                </div>

                <div className="contact-container">
                    <div
                        className="contact-info"
                    >
                        <h3 className="terminal-heading">&gt; Contact_Details</h3>
                        <p>
                            Open to SDE roles and freelance opportunities.
                        </p>

                        <div className="info-item">
                            <div className="icon-box"><Mail /></div>
                            <span>tembhareniketa@gmail.com</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><Phone /></div>
                            <span>+91 8999622657</span>
                        </div>
                        <div className="info-item">
                            <div className="icon-box"><MapPin /></div>
                            <span>Nagpur, India</span>
                        </div>

                        <div className="social-links-big">
                            <a href="https://github.com/NiketaTembhare" target="_blank" className="social-btn"><Github /> GitHub</a>
                            <a href="https://www.linkedin.com/in/niketa-tembhare-b86774255/" target="_blank" className="social-btn"><Linkedin /> LinkedIn</a>
                        </div>
                    </div>

                    <div
                        className="contact-form-wrapper"
                    >
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-group">
                                <label>Name:</label>
                                <input type="text" placeholder="Enter name..." required />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="email" placeholder="Enter email..." required />
                            </div>
                            <div className="form-group">
                                <label>Message:</label>
                                <textarea rows="5" placeholder="Enter message..." required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                                {loading ? 'Transmitting...' : (
                                    <>Send Protocol <Send size={18} /></>
                                )}
                            </button>

                            {success && <p className="success-msg">Transmission Successful!</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
