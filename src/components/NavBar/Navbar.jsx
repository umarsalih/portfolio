import React, {Fragment, useState} from 'react'
import {Link} from 'react-router-dom'
import "../NavBar/navbar.css";
import {Row, Col, Container} from 'react-bootstrap';
function Navbar() {

    const [visible,
        setVisible] = useState(false);

        const toggleVisibility = () => {
            setVisible(current => !current);
        }

    const handleScroll = () => {
        const element = document.getElementById("portfolio-section");

        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <div>
            <div class="topnav">

                <Container>
                    <Row>
                        <Col lg="4" xs="12">
                            <div className='nav_left'>
                                <Link className='nav-links' to={"./mobile-designs"}>
                                    <a>mobile designs</a>
                                </Link>
                                <Link className='nav-links' onClick={handleScroll}>
                                    <a id='portfolio_text'>portfolio</a>
                                </Link>
                            </div>
                        </Col>
                        <Col lg="4" xs="12">
                            <div>
                                <img src={require('../../assets/us_logo.png')}/>
                            </div>
                        </Col>
                        <Col lg="4" xs="12">
                            <div className='nav_right'>
                                <Link className='nav-links'>
                                    <a id='contact_text'>contact</a>
                                </Link>
                                <Link className='nav-links'>
                                    <a>about</a>
                                </Link>
                            </div>
                        </Col>

                    </Row>
                </Container>

            </div>

            <div className='responsive-nav'>
                <div>
                    <img src={require('../../assets/us_logo.png')}/>
                </div>
                <div className='hm-logo-holder' onClick={toggleVisibility}>
                    <img id='hm-logo' src={require('../../assets/hm-btn.png')}/>
                </div>
            </div>

            {visible
                ? (
                    <Fragment>
                        <div className='responsive-nav-links'>
                            <Link className='nav-links' to={"./mobile-designs"}>
                                <a>mobile designs</a>
                            </Link>
                            <Link className='nav-links' onClick={handleScroll}>
                                <a id='portfolio_text'>portfolio</a>
                            </Link>
                            <Link className='nav-links' to={"./mobile-designs"}>
                                <a>mobile designs</a>
                            </Link>
                            <Link className='nav-links' onClick={handleScroll}>
                                <a id='portfolio_text'>portfolio</a>
                            </Link>
                        </div>
                    </Fragment>
                ) : null}

        </div>

    )
}

export default Navbar;