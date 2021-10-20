import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import about from '../../images/about.png'

const About = () => {
    return (
        <div className='my-3 '>
            <Card.Header>
                <h1 className='mb-3'>PSYCARE.COM</h1>
            </Card.Header>
            <Card className="text-center container ">

                <Card.Body>
                    <Card.Img variant="top" src={about} />
                    <Card.Title>
                        <h1 className='my-5'>About Us</h1>
                    </Card.Title>
                    <Card.Text>
                        Find Out Who We Are Learn about our professional psychology therapy There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by humour, or randomised words which don’t look even slightly
                    </Card.Text>
                    <Link to='/home'> <Button variant="primary">Go Home</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default About;