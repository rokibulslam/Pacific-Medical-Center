import React, { useState } from 'react';
import { Button,  Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';




const SignIn = () => {
    const {signIn, error, gooleSignIn, user}=useAuth()
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        signIn(email, password);
    }


    return (
        <div className="my-5 overflow-hidden py-5">
            <h1 className="text-center">Sign In Here</h1>
            <div className="container">
            <Form className="pt-5 pb-2" onClick={handleSignIn}>
            <Form.Group className="mb-3 " controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>
                <h6 className="text-danger">{error}</h6>
            <Button variant="primary" type="submit">
                Sign In
            </Button>   
            </Form>
            
            <Button onClick={gooleSignIn}>Sign in with google</Button>
            <br/>
            <p className="d-inline me-3">Create a new account here</p>
            <Link to="/signUp">Sign Up</Link> 
        </div>
        </div>
    );
};

export default SignIn;