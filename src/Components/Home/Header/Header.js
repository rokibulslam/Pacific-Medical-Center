import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../../Images/Banner/Hospital1.png'
import img2 from '../../../Images/Banner/hospital2.png'
import img3 from '../../../Images/Banner/hospital3.png'
import './Header.css'
const Header = () => {
    return (
        <div className="overflow-hidden ">
            <Carousel variant="light">
            <Carousel.Item>
                <img height="600px"
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption >
                <h5 className="fs-3 fw-bold">Hospital Area</h5>
                        <p>Pacific Medical Center</p>
                        <Link to="/about">
                            <Button className="btn btn-warning">About Us</Button>
                        </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="600px"
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5 className="fs-3 fw-bold">Front Side of Hospital</h5>
                        <p>Pacific Medical Center</p>
                        <Link to="/about">
                            <Button className="btn btn-warning">About Us</Button>
                        </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="600px"
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5 className="fs-3 fw-bold">Internal Rooms For Doctors</h5>
                        <p>Pacific Medical Center</p>
                        <Link to="/about">
                            <Button className="btn btn-warning">About Us</Button>
                        </Link>
                        
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;