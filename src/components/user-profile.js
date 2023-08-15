import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import UserProfile from './section-components/user-profile';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

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

