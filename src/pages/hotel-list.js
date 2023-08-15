import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import HotelList from '../components/section-components/hotel-list';
import Footer from '../components/global-components/footer';

const HotelListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tour List"  />
        <HotelList />
        <Footer />
    </div>
}

export default HotelListPage

