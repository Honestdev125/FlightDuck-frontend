import React from 'react';
import Navbar from '../components/global-components/navbar';
import PageHeader1 from '../components/global-components/page-header1';
// import DestinationDetails from './section-components/destination-details';
import BookingConfirmation from '../components/section-components/booking-confirmation';
import Subscribe from '../components/section-components/subscribe';
import Footer from '../components/global-components/footer';

const BookingConfirmationDetailsPage = () => {
    return <div>
       
        <PageHeader1 headertitle={3}  
                    duckUrl='assets/img/Ducks/duck_for_booking_confirmation_page.png'
                    calendar={false}  />
        <BookingConfirmation />
        <Subscribe />
        <Footer />
    </div>
}

export default BookingConfirmationDetailsPage

