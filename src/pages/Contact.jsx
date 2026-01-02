import React, { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import './Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('Thank you! Your message has been sent. We will contact you shortly.')
        setFormData({ name: '', email: '', phone: '', message: '' })
    }

    return (
        <div className="contact-page section-padding">
            <div className="container">
                <div className="text-center section-header">
                    <h1>Contact Us</h1>
                    <p>Get in touch with our security experts today.</p>
                </div>

                <div className="contact-grid">
                    {/* Contact Info */}
                    <div className="contact-info-card">
                        <h2>Get In Touch</h2>
                        <p className="contact-intro">
                            Ready to secure your infrastructure? Reach out to us for a consultation or audit.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="icon-box">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Phone</h3>
                                    <p>8882373734</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email</h3>
                                    <p>vikas@vls.net.in</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <div className="icon-box">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Address</h3>
                                    <p>C-24, Platina Heights, Sector-62, Noida, Uttar Pradesh – 201301</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            {/* Embed Google Map would go here */}
                            <div className="map-mockup">
                                <span>Google Map Area</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-card">
                        <h2>Send a Message</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@company.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Your Phone Number"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="How can we help you?"
                                    rows="4"
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
