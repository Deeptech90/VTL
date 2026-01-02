import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Facebook, Linkedin, Twitter } from 'lucide-react'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top">
                <div className="container footer-grid">
                    {/* Company Info */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Vertical Limit System</h3>
                        <p className="footer-desc">
                            Trusted IT and cybersecurity solutions provider empowering businesses since 2008.
                        </p>
                        <div className="social-links">
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Services</h3>
                        <ul className="footer-links">
                            <li><Link to="/products-services">Managed Wi-Fi</Link></li>
                            <li><Link to="/products-services">Cloud Hosting</Link></li>
                            <li><Link to="/products-services">Surveillance</Link></li>
                            <li><Link to="/cybersecurity">Cybersecurity</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-heading">Company</h3>
                        <ul className="footer-links">
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/">Privacy Policy</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-section">
                        <h3 className="footer-heading">Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <MapPin size={18} className="contact-icon" />
                                <span>C-24, Platina Heights, Sector-62, Noida, UP - 201301</span>
                            </li>
                            <li>
                                <Phone size={18} className="contact-icon" />
                                <span>8882373734</span>
                            </li>
                            <li>
                                <Mail size={18} className="contact-icon" />
                                <span>vikas@vls.net.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Vertical Limit System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
