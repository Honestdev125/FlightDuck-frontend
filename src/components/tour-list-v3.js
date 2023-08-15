import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TourLIst from './section-components/tour-list-v3';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

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

