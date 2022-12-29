import React from 'react';
import "./portfolio.css";
import {Row, Col, Container} from 'react-bootstrap';

function Portfolio() {
    return (
        <div>
            <div className='portfolio-section-wrapper'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col className='remove-padding remove-margin' lg='12'>
                            <h1 id='portfolio-section-title'>projects</h1>
                        </Col>
                    </Row>

                    <Row className=" project justify-content-md-center">
                        <Col className='remove-padding remove-margin' lg='6'>
                            <div align='right' className='project-left'>
                                <h1>care.io</h1>
                            </div>
                        </Col>
                        <Col className='remove-padding' lg='6'>
                            <div className='project-right'>
                                <img src={require('../../assets/careio.png')}/>
                            </div>
                        </Col>
                    </Row>
                    <Row className=" project justify-content-md-center">
                        <Col lg='6'>
                            <div className='project-info project-info-left'>
                                <div>
                                    <p className='isSubtitle'>What is this project?</p>
                                    <p>Software engineering term project with a group of four</p>
                                </div>

                                <div>
                                    <p className='isSubtitle'>What I did for this project?</p>
                                    <p>Software engineering term project with a group of four. Lorem ipsum dolor sit
                                        amet. Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame</p>
                                </div>

                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className='project-info project-info-right'>
                                <div>
                                    <p className='isSubtitle'>What is the stack used?</p>
                                    <p>Front-end & Design: Figma, React.js
                                        <br/>
                                        Back-end & Database: Spring Boot, MySQL
                                    </p>
                                </div>

                                <div>
                                    <p className='isSubtitle'>Find the project here:
                                    </p>
                                    <p>clickable</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Portfolio