import React from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from "../Footer/Footer";
import {Row, Col, Container, Nav} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import {useState} from 'react';
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
                            <p>A full-stack mobile app created in a group of four for Mobile App Development 1.</p>
                            <p><p className='underline bold'>Tech stack:</p> Android Studio, Java, SQLite</p>
                            <p>Contribution: Theme selection, design of logo, UI design of login, register, calendar, and chat</p>
                        </Col>
                        <Col className='mobile-project-carousel' lg="6" xs="12">
                            <CarouselProject/>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    )
}

export default Mobile