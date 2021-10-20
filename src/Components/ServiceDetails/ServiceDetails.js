import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = (props) => {
    const { id } = useParams();
    console.log(id)

    const [service, setService] = useState([])

    useEffect(() => {
        fetch("/allServices.json")
            .then(res => res.json())
            .then(data=>setService(data))
    }, [])
    

    const details = service?.filter(td => td._id === id)
       console.log(details)
    return (
        <div className="container py-5">
            <div className="row">
            <div className="col-md-6 col-sm-12">
                <img className="img-fluid rounded rounded-3" src={details[0]?.imageURL} alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
                <h3 className="fw-bolder text-decoration-underline text-info">Name: {details[0]?.name}</h3>
                <p><b>Description:</b> {details[0]?.description}</p>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;