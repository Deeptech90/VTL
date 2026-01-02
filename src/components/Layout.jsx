import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="main-content" style={{ minHeight: '80vh' }}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout
