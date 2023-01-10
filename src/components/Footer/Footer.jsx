import React from 'react'
import "./footer.css"
import {Row, Col, Container} from 'react-bootstrap';

function Footer() {
    return (
        <div>
            <div className='footer-wrapper'>
                <Container>
                    <Row className="justify-content-md-center">
                        <Col lg='12'>
                            <div>
                                <a href='https://github.com/umarsalih' target="_blank"><img href="https://github.com/umarsalih" src={require('../../assets/logo_github.png')}/></a>
                                <a href='https://www.linkedin.com/in/umarsalih/' target="_blank"><img src={require('../../assets/logo_linkedin.png')}/></a>
                                
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer