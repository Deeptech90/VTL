import React from 'react'
import { Link } from 'react-router-dom'
import { ShieldAlert, Activity, FileCheck, Search, Database } from 'lucide-react'
import './Cybersecurity.css'

const Cybersecurity = () => {
    return (
        <div className="cyber-page">
            <div className="cyber-hero">
                <div className="container text-center">
                    <ShieldAlert size={64} className="cyber-hero-icon" />
                    <h1>Stay Secure Against Cyber Threats</h1>
                    <p>
                        Defend your organization with advanced threat detection, real-time monitoring, and proactive defense strategies.
                    </p>
                    <Link to="/contact" className="btn btn-primary">Request a Security Audit</Link>
                </div>
            </div>

            <div className="section-padding container">
                <div className="cyber-features">
                    <div className="cyber-feature-card">
                        <Search size={40} className="feature-icon" />
                        <h3>Threat Detection</h3>
                        <p>Advanced AI-driven algorithms to identify potential threats before they cause harm.</p>
                    </div>

                    <div className="cyber-feature-card">
                        <Activity size={40} className="feature-icon" />
                        <h3>Real-time Monitoring</h3>
                        <p>24/7 surveillance of your digital infrastructure ensuring always-on security.</p>
                    </div>

                    <div className="cyber-feature-card">
                        <Database size={40} className="feature-icon" />
                        <h3>Data Protection</h3>
                        <p>Comprehensive encryption and backup solutions to safeguard critical business data.</p>
                    </div>

                    <div className="cyber-feature-card">
                        <FileCheck size={40} className="feature-icon" />
                        <h3>Compliance Management</h3>
                        <p>Detailed reports and analytics to ensure you meet industry standards and regulations.</p>
                    </div>
                </div>

                <div className="why-audit-section">
                    <h2>Why You Need Intelligent Security</h2>
                    <p className="audit-text">
                        Cyber threats are evolving. Traditional defense is not enough. Vertical Limit System provides proactive security analytics and audit-ready reports to give you complete visibility and control.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cybersecurity
