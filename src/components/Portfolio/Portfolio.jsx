import React from 'react';
import "./portfolio.css";
import {Row, Col, Container} from 'react-bootstrap';
import Project from './Project';

function Portfolio() {
    return (
        <div>
            <div className='portfolio-section-wrapper'>
                <h1 id='portfolio-section-title'>projects</h1>
                <Project
                    projectName='care.io'
                    projectImage={require('../../assets/careio.png')}
                    projectInfo1='Full stack term project for Software Engineering, awarded an "A" grade'
                    projectInfo2='Created the front-end components using advanced React.js to perform dynamically. Incorporated emailjs api to send automated emails
                    upon user signups'
                    projectInfo3='Figma, React.js, Spring Boot, MySQL'
                    projectInfo4='clickable'/>

                <Project
                    projectName='care.io'
                    projectImage={require('../../assets/translink.png')}
                    projectInfo1='Reports the bus schedule for any entered bus station number'
                    projectInfo2='Software engineering term project with a group of four. Lorem ipsum dolor sit
                                        amet. Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'
                    projectInfo3='Front-end & Design: Figma, React.js
                                        <br/>
                                        Back-end & Database: Spring Boot, MySQL'
                    projectInfo4='clickable'/>

                <Project
                    projectName='care.io'
                    projectImage={require('../../assets/hospital.png')}
                    projectInfo1='Software engineering term project with a group of four'
                    projectInfo2='Software engineering term project with a group of four. Lorem ipsum dolor sit
                                        amet. Lorem ipsum dolor sit ame Lorem ipsum dolor sit ame'
                    projectInfo3='Front-end & Design: Figma, React.js
                                        <br/>
                                        Back-end & Database: Spring Boot, MySQL'
                    projectInfo4='clickable'/>
            </div>
        </div>
    )
}

export default Portfolio