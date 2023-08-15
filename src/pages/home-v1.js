import React from 'react';
import Navbar from '../components/global-components/navbar';
import Banner from '../components/section-components/banner';
import Search from '../components/section-components/search';
import Intro from '../components/section-components/intro';
import Offer from '../components/section-components/offer';
import Video from '../components/section-components/video';
import HolidayPlan from '../components/section-components/holiday-plan';
import Review from '../components/section-components/review';
import BlogSection from '../components/blog-components/blog-section';
import Ads from '../components/section-components/ads';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const Home_V1 = ({ userName }) => {
    return <div>
        <Navbar homepage={true} />
        <Search />
        <Offer />
        <Footer />
    </div>
}

export default Home_V1

