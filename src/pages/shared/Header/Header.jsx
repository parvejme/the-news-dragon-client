import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <Container>
            {/* Header Info  */}
            <div className="text-center mt-5">
                <img src={logo} alt="" />
                <p className='text-secondary text-center'><small>Journalism Without Fear or Favour</small></p>
                <p className='text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>

            {/* Hot News  */}
            <div className='d-flex py-2 px-2 my-5 rounded bg-light'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger'>
                    I can be a React component, multiple React components, or just some text....     I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            {/* Top Navbar  */}
            <div>
                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#features">Home</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                            </Nav>
                            <Nav className='align-items-center'>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;