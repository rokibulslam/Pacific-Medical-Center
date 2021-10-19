import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { signUp, error } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        signUp(email, password);
    }
    return (
        <div className="container">
            <h1 className="text-center">Registration Here</h1>
            <Form >
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={getEmail} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label className="text-start">Password</Form.Label>
                    <Form.Control onBlur={getPassword} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>
                <h6>{error}</h6>
                <Button onClick={handleSignUp} className="mb-5" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;