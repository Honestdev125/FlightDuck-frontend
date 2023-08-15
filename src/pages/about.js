import React, { useEffect } from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header';
import Intro from '../components/section-components/intro-v3';
import About from '../components/section-components/about';
import History from '../components/section-components/history';
import Team from '../components/section-components/team';
import Footer from '../components/global-components/footer';

const AboutPage = () => {
    return <div>
        {/* <PageHeader headertitle="About Us"  /> */}
        <Navbar />
        <PageHeader headertitle="About Us"  />
        <Intro />
        <About />
        <History />
        <Team />
        <Footer />
    </div>
}

export default AboutPage

