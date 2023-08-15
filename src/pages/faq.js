import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import Faq from '../components/section-components/faq';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const FaqPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="FAQs"  />
        <Faq />
        <Subscribe />
        <Footer />
    </div>
}

export default FaqPage

