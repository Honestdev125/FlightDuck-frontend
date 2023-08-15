import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import GalleryDetails from './section-components/gallery-details';
import Ads from './section-components/ads';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

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

