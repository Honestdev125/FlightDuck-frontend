import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TourLIst from './section-components/tour-list';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const TourListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tour List"  />
        <TourLIst />
        <Subscribe />
        <Footer />
    </div>
}

export default TourListPage

