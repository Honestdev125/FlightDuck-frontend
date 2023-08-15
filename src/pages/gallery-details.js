import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import GalleryDetails from '../components/section-components/gallery-details';
import Ads from '../components/section-components/ads';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const GalleryDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Gallery"  />
        <GalleryDetails />
        <Ads />
        <Subscribe />
        <Footer />
    </div>
}

export default GalleryDetailsPage

