import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/nav.png'
import { HashLink } from 'react-router-hash-link';


import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand className='logo border-0 ' href="/home#home">
                        <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-start ">
                        <Nav.Link className='nav-text' as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className='nav-text' as={HashLink} to="/home#blogs">Blogs</Nav.Link>

                    </Navbar.Collapse>

                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            {user.email &&
                                <h6>Hello<a href="#login"> {user?.displayName}</a>
                                </h6>
                            }
                        </Navbar.Text>
                        <Navbar.Text>
                            <img className='w-50 rounded rounded-pill' src={user.photoURL} alt="" />
                        </Navbar.Text>
                        <Navbar.Collapse className='ms-end'>
                            {
                                user.email ?
                                    <Button variant='primary' className='m-3' onClick={logOut}>Sign Out</Button>
                                    :
                                    <button className='nav-button nav-text'><Nav.Link as={Link} to="/login">Login </Nav.Link></button>
                            }
                        </Navbar.Collapse>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;

