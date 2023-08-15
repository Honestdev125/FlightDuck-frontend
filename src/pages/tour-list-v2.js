import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import TourLIst from '../components/section-components/tour-list-v2';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';
import Search from '../components/section-components/search';

const TourListPageV2 = () => {
    return <div>
        
        <PageHeader headertitle={2}  
                    duckUrl='assets/img/Ducks/duck_for_flights_page.png'
                    calendar={false}
        />
        {/* <Search /> */}
        <TourLIst />
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default TourListPageV2

