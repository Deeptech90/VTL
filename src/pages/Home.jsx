import React from 'react'
import { ArrowRight, Shield, Globe, Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container hero-container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Empowering Businesses with <span className="highlight">Secure & Intelligent</span> IT Solutions
                        </h1>
                        <p className="hero-subtitle">
                            Since 2008, Vertical Limit System helps organizations stay compliant and protected against cyber threats with always-on security.
                        </p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-primary">Get a Consultation</Link>
                            <Link to="/contact" className="btn btn-secondary">Contact Us</Link>
                        </div>
                    </div>
                    {/* Conceptual Image Placeholder or SVG */}
                    <div className="hero-image-container">
                        <div className="hero-visual">
                            <Shield className="hero-icon" size={120} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Snippet */}
            <section className="section-padding services-preview">
                <div className="container">
                    <div className="section-header text-center">
                        <h2>Our Core Competencies</h2>
                        <p>Comprehensive IT and Security solutions for modern enterprises</p>
                    </div>
                    <div className="services-grid-preview">
                        <div className="service-card-preview">
                            <Globe size={48} className="service-icon" />
                            <h3>Managed Wi-Fi</h3>
                            <p>Enterprise-grade connectivity solutions.</p>
                        </div>
                        <div className="service-card-preview">
                            <Server size={48} className="service-icon" />
                            <h3>Cloud Hosting</h3>
                            <p>Secure and scalable cloud infrastructure.</p>
                        </div>
                        <div className="service-card-preview">
                            <Shield size={48} className="service-icon" />
                            <h3>Cybersecurity</h3>
                            <p>Advanced threat detection and defense.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
