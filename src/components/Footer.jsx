import React from 'react';
import './Footer.css';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="social-links">
                    <a href="https://github.com/NiketaTembhare" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={20} />
                    </a>
                    <a href="https://www.linkedin.com/in/niketa-tembhare-b86774255/" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={20} />
                    </a>

                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} All rights reserved. Made with ❤️ by Me.

                </p>
            </div>
        </footer>
    );
};

export default Footer;
