import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import DestinationLIst from './section-components/destination-list';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const DestinationList = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Destinations List"  />
        <DestinationLIst />
        <Subscribe />
        <Footer />
    </div>
}

export default DestinationList

