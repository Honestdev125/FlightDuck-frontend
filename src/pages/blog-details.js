import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import BlogDetails from '../components/blog-components/blog-details'
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const BlogDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Details"  />
        <BlogDetails />
        <Subscribe />
        <Footer />
    </div>
}

export default BlogDetailsPage

