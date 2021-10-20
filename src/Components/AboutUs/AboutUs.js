import React from 'react';
import img from '../../Images/News/doc2.png'
const AboutUs = () => {
    return (
        <div className="container my-5">
            <div className="row py-5">
                <div className="col-md-3">
                    <h1>Chairman's Message</h1>
                    <img className="img-fluid" src={img} alt="" />
                </div>
                <div className="col-md-9 mt-5">
                    <h4 className="text-success">" There is a difference between how Pacific Medical Center is perceived and what we truly are."</h4>
                    <br />
                    <br />
                    <h2>Dr. Rokibul Islam</h2>
                    <p>Founder and Chairman</p>
                </div>
            </div>
            <p>The world perceives us as a low-cost Indian healthcare service provider; what we are engaged in is a passionate journey to establish ourselves as the lowest-cost, high-quality healthcare service provider in the world.</p>
            <br />
            <p>At Pacific Medical Center, we are convinced that 'quality' and 'lowest cost' are not mutually exclusive when it comes to healthcare delivery. In fact, we are well on our way to demonstrate that we are not running our institution as just another number-only business, but are attractively placed to create an affordable, globally-benchmarked quality-driven healthcare services model.</p>
            <br />
            <p>At Pacific Medical Center, we will continue to trust what has worked for us in the past. We will keep our model predominantly asset-light; we will reinvest our accruals; we will engage with governments for land and help them achieve affordable healthcare promises made to their constituencies; we will rent premises from private owners and create small-to-large clinics within existing hospitals. As a result of this flexible approach, we will commission hospitals, medical facilities, and clinics across the breadth of this country, getting closer to patients and taking the promise of quality affordable healthcare to the doorstep of the country's millions.</p>
            <br />
            <p>It is this exciting prospect that stokes my motivation to do bigger and better for the glory of the country that is mine.</p>
        </div>
    );
};

export default AboutUs;