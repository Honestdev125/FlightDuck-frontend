import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner';
import Search from './section-components/search';
import Intro from './section-components/intro';
import Offer from './section-components/offer';
import Video from './section-components/video';
import HolidayPlan from './section-components/holiday-plan';
import Review from './section-components/review';
import BlogSection from './blog-components/blog-section';
import Ads from './section-components/ads';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const Home_V1 = ({ userName }) => {
    return <div>
        <Navbar />
        <Search />
        <Offer />
        <Footer />
    </div>
}

export default Home_V1

