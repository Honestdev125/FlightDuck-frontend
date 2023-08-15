import React from 'react';
import Navbar from './global-components/navbar';
import Banner from './section-components/banner-v2';
import Search from './section-components/search-v2';
import UpcomingWorld from './section-components/upcoming-world';
import Intro from './section-components/intro-v2';
import UpcomingTour from './section-components/upcoming-tour';
import Video from './section-components/video-v2';
import Counter from './section-components/counter';
import Package from './section-components/package';
import Client from './section-components/client';
import BlogSection from './blog-components/blog-section-v2';
import Ads from './section-components/ads';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer-v2';

const Home_V3 = () => {
    return <div>
        <Navbar />
        <Banner />
        <Search />
        <UpcomingWorld />
        <Intro />
        <UpcomingTour />
        <Video />
        <Counter />
        <Package />
        <Client />
        <BlogSection />
        <Ads />
        <Instagram />
        <Footer />
    </div>
}

export default Home_V3

