import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-v2';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const BlogV2 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog"  />
        <BlogList />
        <Subscribe />
        <Footer />
    </div>
}

export default BlogV2

