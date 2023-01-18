import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from "../Footer/Footer";
import {Row, Col, Container, Nav} from 'react-bootstrap';
import "./About.css"

function About() {
    return (
        <div>
            <Navbar/>
            <div className='container-one'>
                <h2>about</h2>
                <Container>
                    <Row>
                        <Col className="profile-photo" lg="6" sm="12">
                            <img id='profile-pic' src={require("./about-assets/my-picture.png")}/>
                        </Col>
                        <Col className='profile-text' lg="6" sm="12">
                            <div>
                                <p>hello! I’m Umar Salih, a front-end web developer based in Vancouver, British
                                    Columbia. I Went from learning to write basic html in high school, to a
                                    front-end developer that enjoys designing & creating products that people love ❤️
                                </p>
                                <p>data structures & algorithm problems also always sparked my interest, yet I also
                                    have an eye for great design, to understand how to create a great user
                                    experience - I find it therapeutic :D . I have worked with groups of diverse
                                    people, and together we were always able to make something great.</p>
                                <p>it's always nice to meet new people. as someone who worked in customer
                                    service, I've interacted with different people that, collectively, have helped me learn
                                    new things</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <h2>skills</h2>
                <Container >
                    <div className='logo-holder'>
                        <Row className='row-of-logos'>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/javascript.png")}/>
                                <p className='logo-text'>javascript</p>
                            </Col>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/react.png")}/>
                                <p className='logo-text'>react.js</p>
                            </Col>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/figma.png")}/>
                                <p className='logo-text'>figma</p>
                            </Col>
                        </Row>
                        <Row className='row-of-logos'>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/git.png")}/>
                                <p className='logo-text'>git/github</p>
                            </Col>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/uiux.png")}/>
                                <p className='logo-text'>ui/ux design</p>
                            </Col>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/sql.png")}/>
                                <p className='logo-text'>sql</p>
                            </Col>
                        </Row>
                        <Row className='row-of-logos'>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/nodejs.png")}/>
                                <p className='logo-text'>node.js</p>
                            </Col>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img className='sass-logo' id="logo_of" src={require("./minilogos/sass2.png")}/>
                                <p id='edit-01' className='logo-text'>sass/css</p>
                            </Col>
                            <Col className='logo-img-holder' sm="4" xs="4" lg="4">
                                <img id="logo_of" src={require("./minilogos/rest-api.png")}/>
                                <p className='logo-text'>rest api</p>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default About;