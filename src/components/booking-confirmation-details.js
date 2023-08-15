import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
// import DestinationDetails from './section-components/destination-details';
import BookingConfirmation from './section-components/booking-confirmation';
import Subscribe from './section-components/subscribe';
import Footer from './global-components/footer';

const BookingConfirmationDetailsPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Booking Confirmation"  />
        <BookingConfirmation />
        <Subscribe />
        <Footer />
    </div>
}

export default BookingConfirmationDetailsPage

