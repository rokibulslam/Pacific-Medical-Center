import React from 'react';
import Header from '../Header/Header';
import Headings from '../Headings/Headings';
import PatientsReview from '../PatientsReview/PatientsReview';
import ServiceBar from '../ServiceBar/ServiceBar';
import Services from '../Services/Services';
import Welcome from '../Welcome/Welcome';

const Home = () => {
   
   
    return (
        <div>
            <Header></Header>
            <Headings></Headings>
            <ServiceBar></ServiceBar>
            <Services></Services>
            <Welcome></Welcome>
            <PatientsReview></PatientsReview>
        </div>
    );
};

export default Home;