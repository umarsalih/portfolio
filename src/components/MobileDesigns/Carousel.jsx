import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import {Carousel} from 'react-bootstrap';
import {useState} from 'react';
import "./mobile.css";


function CarouselProject() {
    const [index,
        setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage1.png")}
                        alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage2.png")}
                        alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage3.png")}
                        alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage4.png")}
                        alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage5.png")}
                        alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage6.png")}
                        alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./mobile-screenshots/mimage7.png")}
                        alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselProject