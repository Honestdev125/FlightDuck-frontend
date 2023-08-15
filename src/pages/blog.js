import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import BlogList from '../components/blog-components/blog-list';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

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

