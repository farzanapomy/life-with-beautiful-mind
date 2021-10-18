import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import logo from '../../../images/logo.jpg'
import './Footer.css'


const Footer = () => {
    // const element = <FontAwesomeIcon icon={faClock} />

    return (
        <div>
            <div className="container px-4 ">
                <div className="row g-5">
                    <div className="col">
                        <div className="p-3 border  border-0">
                            <img className='w-50' src={logo} alt="" />
                            <p>
                                Being a full-time psychologist, I make my patients feel special so they can discuss their problems openly. My goal is to help people fighting their fears and pfe issues.
                            </p>

                        </div>
                    </div>
                    <div className="col ">
                        <div className="p-3 border  text-style border-0">
                            <h6>Contact Details</h6>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p><i class="fab fa-facebook"></i></p>
                                <p>1870 Alpaca Way Irvine, Chittagong 92614.Bangladesh</p>
                            </div>
                            <div className='d-flex justify-content-center align-items-center'>
                                <p><i class="fas fa-phone"></i></p>
                                <p>Phone: +1 921 124 9220,Mail: info@psychare.com</p>

                            </div>
                            <div className='d-flex justify-content-center align-items-center m-2'>
                                {/* <p>{element}</p> */}
                                <p>Mon - Fri: ( 9am - 6pm )</p>
                                <p>Sat & Sun: CLOSED</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border border-0 ">
                            <h6>Our Programs</h6>
                            <div className='text-style'>
                                <p>Aged care services</p>
                                <p>Alcohol and drug services</p>
                                <p>Caring  care services</p>
                                <p>Crisis and support services</p>
                                <p>End of pfe </p>
                                <p>Major trauma services</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="p-3 border border-0 ">
                            <h6>Book Appointment</h6>
                            <p>Please call : ++032145680</p>
                            <p>Contact us now for a quote about consultation ( Available 24/7 )</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className='footer-text '>© 2021 - Copyright by Farzana Pomy</p>
        </div>
    );
};

export default Footer;