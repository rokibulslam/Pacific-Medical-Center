import React from 'react';

import './ServiceBar.css'

const ServiceBar = () => {
    return (
        <div className="row">
            <div className="col-md-3 service1">
                <h3 className
                ="p-3 text-center ">24 HOURS SERVICE</h3>
            </div>
            <div className="col-md-3 service2">
                <h3 className="p-3 text-center ">ONLINE APPOINMENT</h3>
            </div>
            <div className="col-md-3 service3">
                <h3 className
                ="p-3 text-center ">ONLINE PAYMENT</h3>
            </div>
            <div className="col-md-3 service4 text-center">
                <h3 className
                ="p-3 text-center">YOUR PHYSICIANS</h3>
            </div>
        </div>
    );
};

export default ServiceBar;