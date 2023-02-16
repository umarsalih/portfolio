import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from "../Footer/Footer";
import {Row, Col, Container, Nav} from 'react-bootstrap';
import CarouselProject from './Carousel';
import "./mobile.css";

function Mobile() {

    return (
        <div>
            <Navbar/>
            <div className='mobile-project'>
                <Container>
                    <Row>
                        <Col className='mobile-project-text' lg="6" xs="12">
                            <h2 className='underline'>NoMoSolo</h2>
                            <p className='underline bold reduce-title-space'>Tech stack:</p>
                            <p >

                                figma, android studio, java, SQLite</p>
                            <p className='justify'>this is a social media app where musicians can sign up to create a profile,
                                list any musical talents they have, and meet with other musicians who want to
                                create music with them. Some cool features include chat, notes, and viewing
                                other registered users.</p>

                            <p>
                                <b>Contribution: 
                                </b> Theme selection, design of logo, UI design of login, register, calendar, and
                                chat</p>

                            <p className='underline bold reduce-title-space'>Link to project:
                            </p>
                            <a
                                className='link-text fancy-link'
                                target="_blank"
                                href='https://github.com/bill071194/NoMoSolo'>
                                Github
                            </a>
                        </Col>
                        <Col className='mobile-project-carousel' lg="6" xs="12">
                            <CarouselProject/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

export default Mobile