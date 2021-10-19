import React from 'react';
import Header from '../Header/Header';
import Headings from '../Headings/Headings';
import PatientsReview from '../PatientsReview/PatientsReview';
import Services from '../Services/Services';

const Home = () => {
   
   
    return (
        <div>
            <Header></Header>
            <Headings></Headings>
            <Services></Services>
            <PatientsReview></PatientsReview>
        </div>
    );
};

export default Home;