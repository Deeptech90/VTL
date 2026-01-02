import React from 'react'
import { Award, Clock, Users } from 'lucide-react'
import './About.css'

const About = () => {
    return (
        <div className="about-page">
            <div className="about-header section-padding">
                <div className="container text-center">
                    <h1>About Vertical Limit System</h1>
                    <p className="subtitle">Empowering Businesses with Secure, Scalable, and Compliant Technology Solutions Since 2008</p>
                </div>
            </div>

            <section className="section-padding">
                <div className="container about-grid">
                    <div className="about-content">
                        <h2>Who We Are</h2>
                        <p>
                            Vertical Limit System is a trusted IT and cybersecurity solutions provider committed to delivering enterprise-grade infrastructure.
                            We empower businesses to navigate the complex digital landscape with secure, scalable, and compliant technology solutions.
                        </p>
                        <p>
                            With over 15 years of industry experience, we specialize in building robust networks, securing digital assets, and ensuring seamless communication for organizations of all sizes.
                        </p>

                        <div className="founder-card">
                            <h3>Leadership</h3>
                            <div className="founder-info">
                                <div>
                                    <h4>Vikas Dager</h4>
                                    <span className="founder-role">CEO & Founder</span>
                                </div>
                            </div>
                            <p className="founder-quote">
                                "Our mission is to help organizations stay compliant and protected against cyber threats with always-on security."
                            </p>
                        </div>
                    </div>

                    <div className="about-stats">
                        <div className="stat-card">
                            <Clock size={40} className="stat-icon" />
                            <h3>Since 2008</h3>
                            <p>Established Excellence</p>
                        </div>
                        <div className="stat-card">
                            <Award size={40} className="stat-icon" />
                            <h3>15+ Years</h3>
                            <p>Industry Experience</p>
                        </div>
                        <div className="stat-card">
                            <Users size={40} className="stat-icon" />
                            <h3>Trusted</h3>
                            <p>By Leading Enterprises</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
