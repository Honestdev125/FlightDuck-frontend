import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import Gallery from '../components/section-components/gallery';
import Ads from '../components/section-components/ads-v2';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const TourListPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery"  />
        <Gallery />
        <Ads />
        <Subscribe />
        <Footer />
    </div>
}

export default TourListPage

