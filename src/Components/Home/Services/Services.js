import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch("./allServices.json")
            .then(res => res.json())
            .then(data=>setServices(data))
    }, [])
    


    return (
        <div id="services" className="container my-5">
            <div className="row">
            {
                services?.map(service=>
                    <div
                        key={service._id}
                        className="col-md-3">
                    <Card style={{ width: '18rem' }}>
                    <Card.Img className="img-fluid" variant="top" src={service.imageURL} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                        {service.description}
                        </Card.Text>
                        <Link to={`/service/${service._id}`}>
                            <Button variant="primary">Details</Button>
                        </Link>
                    </Card.Body>
                    </Card>
                </div>)
            }
            </div>
        </div>
    );
};

export default Services;