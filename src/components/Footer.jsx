import React from 'react';
import './Footer.css';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="social-links">
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Github size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon">
                        <Twitter size={20} />
                    </a>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} All rights reserved. Made with ❤️ by You.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
