import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from "../Footer/Footer";
import {Row, Col, Container, Nav} from 'react-bootstrap';
import CarouselProject from './Carousel';
import FS_Carousel from "./FS_Carousel";
import "./mobile.css";

function Mobile() {

    return (
        <div>
            <Navbar/>
            <div className='mobile-project'>
                <Container>
                    <Row className='mobile-project-item'>
                        <Col className='mobile-project-text' lg="6" xs="12">
                            <h2 className='underline'>FoodSavvy</h2>
                            <p>
                                <i>"Beautiful, clean design, ease of data entry and workflow, very good
                                    adeherence to design process." </i>
                                    - project leader
                            </p>
                            <p className='underline bold reduce-title-space'>focus:</p>
                            <p >
                                <i>android design patterns, requirements gathering, ux design principles, reporting</i>
                            </p>
                            <p className='underline bold reduce-title-space'>description:</p>
                            <p className='justify'>we designed a Figma prototype for an app that displays
                                recipes based on the user's inventory. Through requirements generation, we
                                determined the user's needs and preferences for this type of app. We then
                                utilized our envisionment process to develop a high-quality design that provides
                                an exceptional user experience.</p>
                            <p>
                                <b>Contribution:
                                </b><span> </span>
                                design of UI components, conducting research, wireframing, pantry page and main screen,
                                documentation</p>

                            <p className='underline bold reduce-title-space'>Link to project:
                            </p>
                            <a
                                className='link-text fancy-link'
                                target="_blank"
                                href='https://www.figma.com/proto/gOrZwTHL2bGXP2bw6ygWzt/W23_G1_FoodSavvy?node-id=0-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=59%3A310'>
                                Figma Prototype
                            </a>
                        </Col>
                        <Col className='mobile-project-carousel' lg="6" xs="12">
                            <FS_Carousel/>
                        </Col>
                    </Row>
                    <Row className='mobile-project-item'>
                        <Col className='mobile-project-text' lg="6" xs="12">
                            <h2 className='underline'>NoMoSolo</h2>
                            <p className='underline bold reduce-title-space'>Tech stack:</p>
                            <p >
                                figma, android studio, java, SQLite</p>
                            <p className='justify'>this is a social media app where musicians can sign up to
                                create a profile, list any musical talents they have, and meet with other
                                musicians who want to create music with them. Some cool features include chat,
                                notes, and viewing other registered users.</p>

                            <p>
                                <b>Contribution:
                                </b><span> </span>
                                Theme selection, design of logo, UI design of login, register, calendar, and
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