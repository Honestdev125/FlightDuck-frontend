import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import DestinationLIst from '../components/section-components/destination-list';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

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

