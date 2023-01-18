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
                    projectInfo1='a home care business that offers various from cleaning to nannying. Allows people to sign up as service providers and clients for the service.'
                    projectInfo2='reated the front-end components using advanced React.js to perform dynamically. Incorporated emailjs api to send automated emails
                    upon user signups'
                    projectInfo3='figma, react.js, spring boot, MySQL'
                    projectInfo4='link to project'
                    projectGLink="https://github.com/umarsalih/careio_react_frontend"
                    isDeployed={false}
                    />

                <Project
                    projectName='translink'
                    projectImage={require('../../assets/translink.png')}
                    projectInfo1='reports the bus schedule for any entered bus station number'
                    projectInfo2='a personal project that uses an API by translink to monitor the buses real time. Reports the next three buses stopping at a certain station'
                    projectInfo3='figma, react.js & material ui, Translink Open API, json'
                    projectInfo4='link to project'
                    projectWLink="https://umarsalih.github.io/movesmart/"
                    projectGLink="https://github.com/umarsalih/movesmart/tree/master"
                    isDeployed={true}
                    />

                <Project
                    projectName='hospital'
                    projectImage={require('../../assets/hospital.png')}
                    projectInfo1='a simple website for a childrens hospital following basic design principles.'
                    projectInfo2='my first term project for the Front-end Web Development course - made using HTML, CSS, and JavaScript. Awarded an A+ for the project and course'
                    projectInfo3='html, css, javascript' 
                    projectInfo4='link to project'
                    projectWLink="https://umarsalih.github.io/hospital/"
                    projectGLink="https://github.com/umarsalih/childrenshospital"
                    isDeployed={true}
                    />
            </div>
        </div>
    )
}

export default Portfolio