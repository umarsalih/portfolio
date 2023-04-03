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
                                <p>hey there! I'm Umar Salih, a front-end web developer with a passion for
                                    creating visually stunning, user-friendly web and mobile applications. From my early days
                                    of learning basic HTML and javascript to now, I've honed my design and coding
                                    skills to bring your ideas to life.
                                </p>
                                <p>I find solving complex problems through coding and design to be a deeply
                                    satisfying and therapeutic experience.</p>
                                <p>Throughout my career, I've collaborated with diverse teams to create
                                    exceptional products that resonate with users. Whether it's working on a new
                                    feature or troubleshooting an issue, I'm always eager to learn and expand my
                                    skillset.</p>
                                <p>If you're looking for a passionate, detail-oriented front-end developer with
                                    a strong design sensibility and a desire to learn and grow, let's <a target="_blank" href='https://www.linkedin.com/in/umarsalih/'>connect!</a></p>
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
                                <img id="logo_of" src={require("./minilogos/java.png")}/>
                                <p className='logo-text'>java</p>
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
                                <img id="logo_of" src={require("./minilogos/sql.png")}/>
                                <p className='logo-text'>sql</p>
                            </Col>
                        </Row>
                        <Row className='row-of-logos center'>
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