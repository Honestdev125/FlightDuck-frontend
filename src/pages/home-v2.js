import React from 'react';
import Navbar from '../components/global-components/navbar';
import Search2 from '../components/section-components/search-v2';
import Intro from '../components/section-components/intro';
import Footer from '../components/global-components/footer'

const Home_V2 = () => {
    return <div>
        <Navbar  homepage={true} />
        <Search2 />
        <Intro />
        <Footer />
    </div>
}

export default Home_V2;

