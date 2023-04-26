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
                        src={require("./foodSavvy-screenshots/img1.jpg")}
                        alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img2.jpg")}
                        alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img3.jpg")}
                        alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img4.jpg")}
                        alt="First slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img5.jpg")}
                        alt="Second slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img6.jpg")}
                        alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img7.jpg")}
                        alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img8.jpg")}
                        alt="Third slide"/>
                </Carousel.Item>
                <Carousel.Item className='carousel-item'>
                    <img
                        className="d-block w-20"
                        src={require("./foodSavvy-screenshots/img9.jpg")}
                        alt="Third slide"/>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselProject