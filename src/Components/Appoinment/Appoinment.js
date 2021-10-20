import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import Header from '../Home/Header/Header';
import './Appoinment.css'
const Appoinment = () => {
    return (
        <div className="overflow-hidden">
            <Header></Header>
            <div className="container py-5">
                <h1 className="fs-1 text-center pt-5 text-warning">Connecting Dubai’s Leading Healthcare With The World</h1>
                <p>American Hospital Dubai is a premier, multi-specialty healthcare institution, offering world-class primary, secondary, and tertiary medical services. We are a multi-Specialist leader offering cutting-edge, evidence-based medical care. We have set the standards in the region with our centers of excellence in Cancer, Heart, and Orthopedics.</p>
                <p>Our Total Joint Replacement Center of Excellence is the first of its kind in the Middle East and one of only four worldwide, with the most extensive patient base of any private hospital in the region. The center receives international patients from the region and beyond.</p>
                <p>All our physicians are American Board-certified (or equivalent), supported by western-trained nurses, allied health professionals and paramedics. We are a Mayo Clinic Care Network (MCCN) Member. We invest in state-of-the-art facilities and equipment such as Surgical Robotics Systems to provide you with the highest quality care. We believe that the best human expertise, along with the most advanced technology, can achieve breakthroughs in your treatment.</p>
  
            </div>
            <div className="form-bg py-5">
                <div className="container">
                    <h2 className="text-white">International Desk Form</h2>
                    <p className="text-white">Please use the form below to contact us regarding the international Patients service only. For general inquires</p>
                    <Form >
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>MRN</Form.Label>
                    <Form.Control placeholder="Medical Record Number (MRN)" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                    </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="danger" type="submit">
                    Submit Now
                </Button>
                </Form>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;