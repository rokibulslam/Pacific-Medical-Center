import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import imgicon from "../../../Images/micon2-removebg-preview.png"

const NavBar = () => {
    const { user, logOut } = useAuth()
    
    return (
        <div>
            <Navbar className=" sticky-top overflow-hidden navbar" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                    <Navbar.Brand href="#home"><img className="rounded-3" src={imgicon} alt="" /> Pacific Medical Center</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={HashLink} className="text-decoration-none fw-bold "  to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold"  to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold" to="/appoint">Appoinment</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold" to="/experience">Patient Experience</Nav.Link>
                </Nav>
                <Nav className="justify-content-center align-items-center">
                {user.email ? <Button className="mx-3 mb-0 btn-light fw-bold"  onClick={logOut}>Sign Out</Button> :
                <Nav.Link as={HashLink} className="text-decoration-none fw-bold px-3" to="/signIn">Sign in</Nav.Link>}
                {user?.email ? <p className="mb-0">{user.displayName}</p> 
                                : <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold" to="/signUp">Sign Up</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default NavBar;