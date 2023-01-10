import React from 'react';
import "./portfolio.css";
import {Row, Col, Container} from 'react-bootstrap';
import Project from './Project';

function Portfolio() {
    return (
        <div>
            <div id='portfolio-section' className='portfolio-section-wrapper'>
                <h1 id='portfolio-section-title'>projects</h1>
                <Project
                    projectName='care.io'
                    projectImage={require('../../assets/careio.png')}
                    projectInfo1='Full stack term project for Software Engineering, awarded an "A" grade'
                    projectInfo2='Created the front-end components using advanced React.js to perform dynamically. Incorporated emailjs api to send automated emails
                    upon user signups'
                    projectInfo3='Figma, React.js, Spring Boot, MySQL'
                    projectInfo4='link to project'
                    projectLink="https://github.com/umarsalih/careio_react_frontend"/>

                <Project
                    projectName='translink'
                    projectImage={require('../../assets/translink.png')}
                    projectInfo1='Reports the bus schedule for any entered bus station number'
                    projectInfo2='A personal project that uses an API by translink to monitor the buses real time. Reports the next three buses stopping at a certain station'
                    projectInfo3='Figma, React.js, Translink Open API, JSON'
                    projectInfo4='link to project'
                    projectLink="https://umarsalih.github.io/movesmart/"/>

                <Project
                    projectName='hospital'
                    projectImage={require('../../assets/hospital.png')}
                    projectInfo1='A simple website for a hospital following basic design principles.'
                    projectInfo2='A personal term project for Front-end Web Development made using HTML, CSS, and JavaScript. Awarded an A+ for the project and course'
                    projectInfo3='HTML, CSS, JavaScript'
                    projectInfo4='link to project'
                    projectLink="https://umarsalih.github.io/movesmart/"/>
            </div>
        </div>
    )
}

export default Portfolio