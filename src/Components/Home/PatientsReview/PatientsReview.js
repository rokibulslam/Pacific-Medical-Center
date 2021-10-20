import React from 'react';
import './PatientReview.css'
import patientimg from '../../../Images/Patient.png'
const PatientsReview = () => {
    return (
        <div className="bg-img p-5 text-white overflow-hidden">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div className="container">
                <p className="pt-md-4">Patients Experience</p>
                <h1 className="fs-1 fw-bold py-5">Patients Share Their Review</h1>
                <p className="fs-4">Chief Arthur Mbanefo, 91 years old, former ambassador to the UN and Representative of Nigeria, thanks the American Hospital Dubai for the excellent medical treatment and personalized care he received.</p>
            </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="rounded-circle img-fluid" src={patientimg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PatientsReview;