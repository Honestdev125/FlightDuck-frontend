import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader from '../components/global-components/page-header1';
import UserProfile from '../components/section-components/user-profile';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const UserProfilePage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="User Profile"  />
        <UserProfile />
        <br/>
        {/* <Subscribe /> */}
        <Footer />
    </div>
}

export default UserProfilePage

