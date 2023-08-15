import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Faq from './section-components/faq';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

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

