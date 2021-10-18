import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Vibrant Indigo Hospital</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavLink className="text-decoration-none"  to="/home">Home</NavLink>
                <NavLink className="text-decoration-none px-3"  to="#pricing">Services</NavLink>
                <NavLink className="text-decoration-none"  to="#pricing">About Us</NavLink>
                </Nav>
                <Nav>
                <NavLink className="text-decoration-none" to="#deets">Sign In</NavLink>
                <NavLink className="text-decoration-none px-3" to="#memes">Sign Up</NavLink>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default NavBar;