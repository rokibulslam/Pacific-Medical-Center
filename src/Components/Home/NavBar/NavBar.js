import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';


const NavBar = () => {
    const {user,  logOut} = useAuth()
    return (
        <div>
            <Navbar className="navbar fixed-top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
            <Navbar.Brand href="#home">Pacific Medical Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={HashLink} className="text-decoration-none"  to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3"  to="/home#services">Services</Nav.Link>
                <Nav.Link className="text-decoration-none"  to="#pricing">About Us</Nav.Link>
                </Nav>
                <Nav className="justify-content-center align-items-center">
                {user.email ? <Button className="mx-3 mb-0 btn-light"  onClick={logOut}>Sign Out</Button> :
                <Nav.Link as={HashLink} className="text-decoration-none px-3" to="/signIn">Sign in</Nav.Link>}
                {user?.email ? <p className="mb-0">{user.displayName}</p> 
                                : <Nav.Link as={HashLink} className="text-decoration-none px-3" to="/signUp">Sign Up</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default NavBar;