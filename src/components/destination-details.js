import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import DestinationDetails from './section-components/destination-details';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const DestinationDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Booking Details"  />
        <DestinationDetails />
        <Subscribe />
        <Footer />
    </div>
}

export default DestinationDetailsPage

