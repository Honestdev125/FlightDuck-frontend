import React, {Component, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Stripe from "../global-components/Stripe";
import {CardElement} from "@stripe/react-stripe-js";


const BookingConfirmation = () => {

  let [values, setValues] = useState({
    hotelDetails: 'default',
    roomDetails: 'default',
    roomName: 'default',
    flightDetails: 'default',
    packageDetails: 'default'
  });


  let { hotelDetails, roomDetails, roomName, flightDetails, packageDetails
  } = values;


  //this is first booking page

  // useEffect(() => {
  //   hotelDetails = JSON.parse(localStorage.getItem("hotel_details"));
  //   console.log("this is hotelDetails HERE ", hotelDetails)
  //   console.log("let hotelDetails=======");
  //   console.log(hotelDetails)
  //   // console.log("hotel name=====", hotelDetails['hotel'])
  //   roomDetails = JSON.parse(localStorage.getItem("hotel_room_details"));
  //   roomName = localStorage.getItem("hotel_room_name");
  //   flightDetails = JSON.parse(localStorage.getItem("flight_details"));
  // }, [])

  hotelDetails = JSON.parse(localStorage.getItem("hotel_details"));
  roomDetails = JSON.parse(localStorage.getItem("hotel_room_details"));
  roomName = localStorage.getItem("hotel_room_name");
  flightDetails = JSON.parse(localStorage.getItem("flight_details"));
  packageDetails = JSON.parse(localStorage.getItem("packageDetails"));
  console.log( JSON.parse(localStorage.getItem("flight_details")))

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('en-US', options);
  }

  const formatPrice = (price) => {
    
      let formattedPrice = (price / 1000).toFixed(2)
    
    return formattedPrice
  }

  let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'

  const renderBookingDetails = () => {
    return	( <div>
      <div className="destinations-details-page mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <center>
                <b>Hotel Details</b>
              </center>
              <table className="table">
                <tbody>
                <tr>
                  <td className="title">Hotel Name</td>
                  <td className="title">Room</td>
                  <td className="title">Duration</td>
                  <td className="title">Price</td>
                </tr>
                <tr>
                  <td>
                    {/* <i className="fa fa-map-marker"></i> Maldives */}
                    <i className="fa fa-map-marker"></i> {hotelDetails['city']}
                    {/* <h4 className="mt-2">Spanish Steps</h4> */}
                    <h4 className="mt-2">{hotelDetails['hotel']}</h4>
                  </td>
                  <td>
                    <h4>{roomName}</h4>
                    <p>{packageDetails['tripDays']} days {roomDetails['adults']+roomDetails['children']} person</p>
                    {/* <h4>Studio Queen</h4> */}
                    
                  </td>
                  <td>
                    <p>{formatDate(packageDetails['inbounddate'])} to {formatDate(packageDetails['outbounddate'])}</p>
                    <h4>{packageDetails['tripDays']} Days</h4>
                    
                    
                  </td>
                  <td>
                    <h3><span>$</span>{roomDetails['net']}</h3>
                  </td>
                </tr>
                </tbody>
              </table>
              <br/>
              <div style={{backgroundColor: 'white'}}>
                <center>
                  <b>Flight Details</b>
                </center>
                <br></br>
                <table className="table">
                  <tbody>
                  <tr>
                    <td className="title">From</td>
                    <td className="title">To</td>
                    <td className="title">Flight Type</td>
                    <td className="title">Price</td>
                  </tr>
                  <tr>
                    <td className='flightOrigin'>
                      {/* <h4>New York(JKF)</h4> */}
                      <div >
                        <h4>{flightDetails['origin_station']}</h4>
                        {/* <p>17:30</p> */}
                        <p>{flightDetails['departure']['time']}</p>
                      </div>
                    </td>
                    <td>
                      {/* <h4>Tel Aviv(TLV)</h4> */}
                      <h4>{flightDetails['destination_station']}</h4>
                      <p>{flightDetails['arrival']['time']}</p>
                    </td>
                    <td>
                      <h4>Layover</h4>
                      {/* <p>(2 hours and 15 minutes) Moscow</p> */}
                      <p>{flightDetails['total_duration']['hours']} hours and {flightDetails['total_duration']['minutes']} minutes</p>
                    </td>
                    <td>
                      {/* <h3><span>$</span>320</h3> */}
                      <h3><span>{flightDetails['currencySymbol']}</span>${formatPrice(flightDetails['price'])}</h3>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
              <br/>
              <center>
                {/*<Link*/}
                {/*    className="btn btn-aqua"*/}
                {/*    to={{*/}
                {/*      pathname: "/hotel-booking",*/}
                {/*      state: {*/}
                {/*        hotelDetails: hotelDetails,*/}
                {/*        room: roomDetails,*/}
                {/*        roomName: roomName,*/}
                {/*        carrier_name: hotelDetails.carrier_name*/}
                {/*      }*/}
                {/*    }}*/}
                {/*>*/}
                {/*  Pay Now*/}
                {/*</Link>*/}
              </center>
            </div>
          </div>

        </div>
      </div>
          {stripeBooking()}
    </div>
    )}

    const stripeBooking = () => {
      console.log(roomName, roomDetails['net']);
      return ( <div className="stripe "> <Stripe/> </div> )
    }

  return (
      renderBookingDetails()
  )

}

export default BookingConfirmation