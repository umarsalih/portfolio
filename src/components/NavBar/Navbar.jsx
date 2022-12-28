import React from 'react'
import {Link} from 'react-router-dom'
import "../NavBar/navbar.css";

function Navbar() {
    return (

        <div class="topnav">

            <div className='nav_left'>
                <Link>
                    <a>mobile designs</a>
                </Link>
                <Link>
                    <a>portfolio</a>
                </Link>
            </div>

            <div>
                <img src={require('../../assets/us_logo.png')}/>
            </div>

            <div className='nav_right'>
                <Link>
                    <a>contact</a>
                </Link>
                <Link>
                    <a>about</a>
                </Link>
            </div>

        </div>
    )
}

export default Navbar;