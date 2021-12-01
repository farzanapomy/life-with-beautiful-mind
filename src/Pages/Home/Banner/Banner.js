import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/h-banner/1 (1).jpg'
import banner2 from '../../../images/h-banner/1 (2).jpg'
import banner3 from '../../../images/h-banner/1 (3).jpg'
import './Banner.css'
const Banner = () => {
    return (
        <>
            <Carousel className='container'>
                <Carousel.Item interval={1500}>
                    <img
                        style={{ height: '25%' }}
                        className="d-block w-100 img-fluid"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Depression can kill yourself</h3>
                        <p>But A positive attitude gives you power over your circumstances instead of your circumstances having power over you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: '25%' }}
                        className="d-block w-100 img-fluid"
                        src={banner2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Enjoy Your life </h3>
                        <p>There is only one happiness in this life, to love and be loved.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        style={{ height: '25%' }}
                        className="d-block w-100 img-fluid"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>You can share with us your all problems</h3>
                        <p>We will try to give you a peace and smile life.You should trust yourself</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </>
    );
};

export default Banner;