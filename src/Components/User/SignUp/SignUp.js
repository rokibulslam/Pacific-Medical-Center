import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { signUp } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')
    const [name, setName] = useState('')
    
    const getName = (e) => {
        setName(e.target.value)
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        signUp(email, password, name);
    }
    return (
        <div className="container">
            <Form onClick={handleSignUp}>
                <Form.Group className="mb-3 text-start" controlId="formGridAddress2">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control onBlur={getName} placeholder="Your Name" />
                </Form.Group>
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
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;