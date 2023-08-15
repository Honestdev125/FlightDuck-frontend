import axios from 'axios';

export const sendEmailAPI = async (email, hotelObject) => {
    const response = await axios.post('http://127.0.0.1:8000/send-booking-confirmation/', {
        email_address: email,
        hotel_object: hotelObject
    });
    return response.data;
};
