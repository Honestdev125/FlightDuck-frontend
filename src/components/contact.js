import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Contact from './section-components/contact';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const ContactPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us"  />
        <Contact />
        <Subscribe />
        <Footer />
    </div>
}

export default ContactPage

