import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import HotelList from './section-components/hotel-list';
import Footer from './global-components/footer';

const HotelListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tour List"  />
        <HotelList />
        <Footer />
    </div>
}

export default HotelListPage

