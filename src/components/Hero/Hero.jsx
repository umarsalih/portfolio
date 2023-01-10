import React from 'react'
import "../../components/Hero/hero.css";
import {Row, Col, Container} from 'react-bootstrap';

function Hero() {
    return (
        <div className='container-big'>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="12" lg="6" sm="12">
                        <div className='container_left-col'>
                            <div className='container_left-col_text1'>
                                <h1>umar salih</h1>
                                <p>software developer</p>
                            </div>

                            <div className='container_left-col_text2'>
                                <p className='underlined'>core front-end skills</p>
                                <p>javascript, react.js, sass,
                                    <br/>
                                    bootstrap, ui/ux design
                                </p>
                            </div>

                            <div className='container_left-col_text3'>
                                <p className='underlined'>core back-end skills</p>
                                <p>node express, mongodb, mysql, php</p>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" lg="6" sm="12">
                        <div className='container_right-col'>
                            <img id='hero-logo' src={require('../../assets/laptop.png')}/>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>

    )
}

export default Hero