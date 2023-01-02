import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './NavBar/Navbar'
import Portfolio from './Portfolio/Portfolio'
import Footer from './Footer/Footer'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Portfolio />
            <Footer />
        </div>
    )
}

export default Home