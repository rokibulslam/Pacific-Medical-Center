import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../Images/Banner/Hospital1.png'
import img2 from '../../../Images/Banner/hospital2.png'
import img3 from '../../../Images/Banner/hospital3.png'

const Header = () => {
    return (
        <div>
            <Carousel variant="light">
            <Carousel.Item>
                <img height="600px"
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>Hospital Area</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="600px"
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>Front Side of Hospital</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img height="600px"
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Header;