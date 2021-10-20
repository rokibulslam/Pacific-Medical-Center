import React from 'react';
import ambulence from '../../../Images/ambulencd.png'
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="container py-5">
            <div className="row">
            <div className="col-md-4">
                <h1 className="textColor fw-bolder">WELCOME TO PMC</h1>
                <br />
                <br />
                <p>Bangladesh Specialized Hospital has all the characteristics of a world-class hospital with wide range of services and specialists, equipments and technology, ambience and service quality.
                </p>
                <br />
                <br />
                <p>The hospital is a showcase of synergy of medical technology and advances in ICT through paperless medical records. The skilled nurses, technologists and administrators of Bangladesh Specialized Hospital....... </p>
                
            </div>
            <div className="col-md-4 ">
                <img className="img-fluid py-4 rounded rounded-pill" src={ambulence} alt="" />
            </div>
            <div className="col-md-4">
                <h1 className="textColor fw-bolder">OUR MISSION</h1>
                <p>We are dedicated to meeting the needs of:</p>
                <ul>
                    <li><b>Our patient : </b> excellent and cost-effective healthcare</li>
                    <li><b>Our staff :</b> continuing development and welfare</li>
                    <li><b>Our nation :</b> partnership in promoting health in Bangladesh.</li>
                </ul>
                <h1 className="textColor fw-bolder">OUR VISION</h1>
                <p>"To be a renowned organization at the leading edge of Medicine, providing quality healthcare to meet our nation's aspirations."</p>
            </div>

        </div>
        </div>
    );
};

export default Welcome;