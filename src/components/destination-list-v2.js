import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import DestinationLIst from './section-components/destination-list-v2';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const DestinationLIstV2 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Destinations List"  />
        <DestinationLIst />
        <Subscribe />
        <Footer />
    </div>
}

export default DestinationLIstV2

