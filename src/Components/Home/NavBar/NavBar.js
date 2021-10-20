import React from 'react';
import { Button, Container, Nav, Navbar} from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import imgicon from "../../../Images/micon2-removebg-preview.png"
import './Navbar.css'


const NavBar = () => {
    const { user, logOut } = useAuth()
    
    return (
        <div>
            <Navbar className="nav-color sticky-top overflow-hidden navbar " variant="dark" collapseOnSelect expand="lg" >
            <Container>
                    <Navbar.Brand className="fw-bolder text-white"><img className="rounded-3" src={imgicon} alt="" /> PMC</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link as={HashLink} className="text-decoration-none fw-bold text-white"  to="/home#home">Home</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold text-white"  to="/home#services">Services</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold text-white" to="/appoint">Appoinment</Nav.Link>
                <Nav.Link as={HashLink} className="text-decoration-none px-3 fw-bold text-white" to="/experience">Patient Experience</Nav.Link>
                </Nav>
                <Nav className="justify-content-center align-items-center">
                {user.email ? <button className="button text-white"  onClick={logOut}>Sign Out</button> :
                <Nav.Link as={HashLink} className="button text-white m-2" to="/signIn">Sign in</Nav.Link>}
                {user?.email ? <p className="mb-0 ps-3 text-white"> {user.displayName}</p> 
                                : <Nav.Link as={HashLink} className="button text-white" to="/signUp">Sign Up</Nav.Link>}
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>   
        </div>
    );
};

export default NavBar;