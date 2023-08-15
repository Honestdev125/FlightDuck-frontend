import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader1 from '../components/global-components/page-header1';
import DestinationDetails from '../components/section-components/destination-details';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const DestinationDetailsPage = () => {
    return <div>
        <PageHeader1 headertitle={4}  
                    duckUrl='assets/img/Ducks/duck_for_booking_confirmed_page.png'
                    calendar={false}  />
        <DestinationDetails />
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default DestinationDetailsPage

