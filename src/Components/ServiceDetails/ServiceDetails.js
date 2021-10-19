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
        <div className="container">
            <img className="img-fluid" src={details[0]?.imageURL} alt="" />
            <h3>Name: {details[0]?.name}</h3>
            <p>Description: {details[0]?.description}</p>
        </div>
    );
};

export default ServiceDetails;