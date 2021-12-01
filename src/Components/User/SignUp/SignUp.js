import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import {  Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './SignUp.css'


const SignUp = () => {
    const { signUp, error, setError, setName, name} = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState('')

    const getName = (e) => {
        setName(e.target.value)
        if (!setName) {
            setError('Name Field Cant Be Empty')
            return;
        }
    }
    const getEmail = (e) => {
        setEmail(e.target.value)
    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSignUp = (e) => {
        e.preventDefault()
        if (!name) {
            setError('Name Field Cant Be Empty')
            return;
        }
        if(!/(\S+@\S+\.\S+)/.test(email))
        if (password.length < 6) {
         setError('Password Must be at least 6 characters long.')
         return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
             setError('Password Must contain 2 upper case')
      return;
        }
        signUp(email, password);   
    }
     
    return (
      <div className="register-bg overflow-hidden text-white pb-5">
        <h1 className="text-center pt-5">Registration Here</h1>
        <div className="container d-flex flex-column align-items-center">
          <Form>
            <Form.Group
              className="mb-3 text-start"
              controlId="formGridAddress1"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control required onBlur={getName} placeholder="Name" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                onBlur={getEmail}
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-white">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group
              className="mb-3 text-start"
              controlId="formBasicPassword"
            >
              <Form.Label className="text-start">Password</Form.Label>
              <Form.Control
                required
                onBlur={getPassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <h6 className="text-danger">{error}</h6>
            <Button
              onClick={handleSignUp}
              className="googlesign-in text-white  mb-5 sign-in"
              type="submit"
            >
              Submit
            </Button>
            <br />
          </Form>
          <Link className="text-white text-center" to="/signIn">
            Already Registered?
          </Link>
        </div>
      </div>
    );
};

export default SignUp;