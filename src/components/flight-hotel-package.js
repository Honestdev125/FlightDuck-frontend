import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header1';
import HotelFlightPackageList from './section-components/hotel-flight-package-list';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const FlightHotelPackage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Flight Hotel Package List"  />
        <HotelFlightPackageList />
        <Subscribe />
        <Footer />
    </div>
}

export default FlightHotelPackage

