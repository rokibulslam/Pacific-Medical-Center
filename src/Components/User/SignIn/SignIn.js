import React, { useState } from 'react';
import { Button,  Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';




const SignIn = () => {
    const {signIn, error, signOut, gooleSignIn, user}=useAuth()
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
        <div className="container">
            <Form onClick={handleSignIn}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
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
            <Button variant="primary" type="submit">
                Sign In
            </Button>   
            </Form>
            <p>Or</p>
            <h6 className="text-danger">{error}</h6>
            <Button onClick={gooleSignIn}>Sign in with google</Button>
            <p>Create a new account here</p>
            <Link to="/signUp">Sign Up</Link> 
        </div>
    );
};

export default SignIn;