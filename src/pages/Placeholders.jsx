import React from 'react'

const PlaceholderPage = ({ title }) => (
    <div className="container" style={{ padding: '4rem 0' }}>
        <h1 style={{ color: 'var(--color-primary-blue)' }}>{title}</h1>
        <p>Content coming soon...</p>
    </div>
)

export const About = () => <PlaceholderPage title="About Us" />
export const Products = () => <PlaceholderPage title="Products & Services" />
export const Cybersecurity = () => <PlaceholderPage title="Cybersecurity Solutions" />
export const Contact = () => <PlaceholderPage title="Contact Us" />
