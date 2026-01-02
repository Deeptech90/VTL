import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ShieldCheck } from 'lucide-react'
import './Navbar.css'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMenu = () => {
        setIsMobileMenuOpen(false)
    }

    return (
        <nav className="navbar">
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMenu}>
                    <ShieldCheck className="logo-icon" size={32} />
                    <div className="logo-text">
                        <span className="brand-name">Vertical Limit</span>
                        <span className="brand-suffix">System</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="nav-links desktop-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/products-services">Products</Link></li>
                    <li><Link to="/cybersecurity">Cyber Security</Link></li>
                    <li><Link to="/contact" className="btn btn-primary">Contact Us</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <ul className="nav-links mobile-links">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
                        <li><Link to="/products-services" onClick={closeMenu}>Products & Services</Link></li>
                        <li><Link to="/cybersecurity" onClick={closeMenu}>Cyber Security</Link></li>
                        <li><Link to="/contact" className="btn btn-primary" onClick={closeMenu}>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
