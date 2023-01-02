import React from 'react'
import {Link} from 'react-router-dom'
import "../NavBar/navbar.css";

function Navbar() {

    const handleScroll = () => {
        const element = document.getElementById("portfolio-section");

        if(element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (

        <div class="topnav">

            <div className='nav_left'>
                <Link>
                    <a>mobile designs</a>
                </Link>
                <Link onClick={handleScroll}>
                    <a id='portfolio_text'>portfolio</a>
                </Link>
            </div>

            <div>
                <img src={require('../../assets/us_logo.png')}/>
            </div>

            <div className='nav_right'>
                <Link>
                    <a id='contact_text'>contact</a>
                </Link>
                <Link>
                    <a>about</a>
                </Link>
            </div>

        </div>
    )
}

export default Navbar;