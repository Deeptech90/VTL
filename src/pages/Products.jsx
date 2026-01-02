import React from 'react'
import { Wifi, Cloud, Shield, Lock, Video, Phone, Users, Globe } from 'lucide-react'
import './Products.css'

const services = [
    {
        icon: <Wifi size={48} />,
        title: 'Managed Wi-Fi',
        description: 'Enterprise-grade wireless connectivity for seamless operations.'
    },
    {
        icon: <Cloud size={48} />,
        title: 'Cloud Hosting',
        description: 'Secure, scalable, and reliable cloud infrastructure solutions.'
    },
    {
        icon: <Lock size={48} />,
        title: 'Firewall & Router',
        description: 'Advanced perimeter security to protect your network.'
    },
    {
        icon: <Video size={48} />,
        title: 'Surveillance Systems',
        description: 'High-definition monitoring for physical security.'
    },
    {
        icon: <Phone size={48} />,
        title: 'IP-PBX Solutions',
        description: 'Modern communication systems (Matrix, Syntel, NEC).'
    },
    {
        icon: <Users size={48} />,
        title: 'Audio-Video Conference',
        description: 'Collaboration tools for the modern hybrid workplace.'
    },
    {
        icon: <Globe size={48} />,
        title: 'Secured Internet & VPN',
        description: 'Reliable connectivity with encrypted tunnels.'
    },
    {
        icon: <Shield size={48} />,
        title: 'Cybersecurity',
        description: 'Comprehensive protection against evolving digital threats.'
    }
]

const Products = () => {
    return (
        <div className="products-page">
            <div className="products-header section-padding">
                <div className="container text-center">
                    <h1>Our Products & Services</h1>
                    <p className="subtitle">End-to-End IT Infrastructure and Security Solutions</p>
                </div>
            </div>

            <div className="container section-padding">
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon-wrapper">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
