import React from 'react'
import Hero from './Hero/Hero'
import Navbar from './NavBar/Navbar'
import Portfolio from './Portfolio/Portfolio'

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Portfolio />
        </div>
    )
}

export default Home