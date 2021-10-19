import React from 'react';
import error from '../../Images/404.jpg'
const NotFound = () => {
    return (
        <div className="container">
            <div className="m-5 pt-5 ps-5 ps-sm-0">
                <img className="img-fluid" src={error} alt="" />
            </div>
        </div>
    );
};

export default NotFound;