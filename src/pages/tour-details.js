import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import TourDetails from '../components/section-components/tour-details';
// import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const TourDetailsPage = (props) => {
    
    return <div>
        <Navbar />
        <PageHeader headertitle="Hotel Details"  />
        <TourDetails hotelDetails={props.location.hotelDetails}/>
        <Footer />
    </div>
}

export default TourDetailsPage

