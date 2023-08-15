import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogList from './blog-components/blog-list';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const BlogPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog"  />
        <BlogList />
        <Subscribe />
        <Footer />
    </div>
}

export default BlogPage

