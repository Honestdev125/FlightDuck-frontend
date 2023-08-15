import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import TourLIst from '../components/section-components/tour-list-v3';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const TourListPageV3 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tour List"  />
        <TourLIst />
        <Subscribe />
        <Footer />
    </div>
}

export default TourListPageV3

