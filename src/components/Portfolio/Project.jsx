import React, {Fragment} from 'react'
import {Row, Col, Container} from 'react-bootstrap';

function Project(props) {

    const isDeployed = props.isDeployed;

    return (
        <div>
            <Container>

                <Row className=" project justify-content-md-center">
                    <Col className='remove-padding remove-margin' lg='6'>
                        <div align='right' className='project-left'>
                            <h1>{props.projectName}</h1>
                        </div>
                    </Col>
                    <Col className='remove-padding' lg='6'>
                        <div className='project-right'>
                            <img src={props.projectImage}/>
                        </div>
                    </Col>
                </Row>
                <Row className=" project justify-content-md-center">
                    <Col lg='6'>
                        <div className='project-info project-info-left'>
                            <div>
                                <p className='isSubtitle'>What is this project?</p>
                                <p>{props.projectInfo1}</p>
                            </div>

                            <div>
                                <p className='isSubtitle'>What I did for this project?</p>
                                <p>{props.projectInfo2}</p>
                            </div>

                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className='project-info project-info-right'>
                            <div>
                                <p className='isSubtitle'>What is the stack used?</p>
                                <p>{props.projectInfo3}</p>
                            </div>

                            <div>
                                <p className='isSubtitle'>Find the project here:
                                </p>
                                <a target="_blank" id='link-text' href={props.projectGLink}>Github</a>
                                {isDeployed
                                    ? (
                                        <Fragment>
                                            <span>
                                                
                                            </span>
                                            <a className='underline' target="_blank" id='link-text' href={props.projectWLink}> | Website</a>
                                        </Fragment>
                                    )
                                    : null}

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Project