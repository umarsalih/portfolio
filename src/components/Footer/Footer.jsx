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
                                <img src={require('../../assets/logo_github.png')}/>
                                <img src={require('../../assets/logo_linkedin.png')}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Footer