import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'



const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebook}size="3x" />
    const twitter = <FontAwesomeIcon icon={faTwitter}size="3x" />
    const instgaram = <FontAwesomeIcon icon={faInstagram}size="3x" />
    return (
        <div className="footer-bg text-white fw-light p-5">
            <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                    <li className="fw-bold">QUICK LINKS</li>
                    <li>Find a Doctor</li>
                    <li>Book an Appointment</li>
                    <li>Make an Enquiry</li>
                    <li>Feedback</li>
                    <li>Hospitals</li>
                    <li>Blogs</li>
                    <li>Privilege</li>
                    <li>card</li>
                    <li>Heart Rhythm Disorder</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                    <li className="fw-bold">CARES</li>
                    <li>Hernia</li>
                    <li>Lung Cancer</li>
                    <li>Brain Tumour</li>
                    <li>Liver Cancer</li>
                    <li> Heart Attack</li>
                    <li>Urinary Problems</li>
                    <li>Heart Transplant</li>
                    <li>Kidney Transplant</li>
                    <li>Bone Marrow Transplant</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                <li className="fw-bold">CENTRES OF EXCELLENCE</li>
                <li>Liver Transplant & HPB </li>
                <li>Cardiology</li>
                <li>Cardiac Surgery</li>
                <li>Neurology</li>
                <li>Neurosurgery</li>
                <li>Orthopaedics</li>
                <li>Robotic Surgery</li>
                <li>Vascular Surgery</li>
                <li>Nephrology</li>
                </ul>
            </div>
            <div className="col-md-3 col-sm-12">
                <ul className="list-unstyled">
                <li className="fw-bold">MEDICAL PROFESSIONALS</li>
                <li>Academics</li>
                <li>Clinical Research</li>
                </ul>
                <Form.Control type="email" placeholder="Enter Your Email" />
                        <Button>Subscribe</Button>
                        <div className="pt-3">
                            <a className="px-2" href="https://www.facebook.com/" >{facebook}</a>
                    <a className="px-2" href="https://www.facebook.com/" >{instgaram}</a>
                    <a className="px-2"  href="https://www.facebook.com/">{twitter}</a>
                        </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Footer;