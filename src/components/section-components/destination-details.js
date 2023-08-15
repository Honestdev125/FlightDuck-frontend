import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

let hotelDetails = null;
let roomDetails = null;
let roomName = null;
let flightDetails = null;
let onlyHotel = null;
let packageDetails = null;
const DestinatioDetails = () => {

  
    onlyHotel = JSON.parse(localStorage.getItem("only_hotel"));
    console.log("onlyHotel=======", onlyHotel);
    hotelDetails = JSON.parse(localStorage.getItem("hotel_details"));
    console.log("let hotelDetails=======");
    console.log(hotelDetails)

    roomDetails = JSON.parse(localStorage.getItem("hotel_room_details"));
    roomName = localStorage.getItem("hotel_room_name");
    flightDetails = JSON.parse(localStorage.getItem("flight_details"));
    packageDetails = JSON.parse(localStorage.getItem("packageDetails"));
  

  const openUrl=() => {
    let flightBookingUrl = localStorage.getItem('flight_booking_url');
    window.open(flightBookingUrl, '_blank');
    // window.location.href = flightBookingUrl
  }
 const formatDate = (dateString) => {
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


    let flightDetailsTable; //need to make this responsive
      flightDetailsTable = (
        <div className="flightDetails-content" style={{backgroundColor: 'white', margin: '20px', padding: '20px', borderRadius: '10px'}}>
          <center>
            <b>Flight Details - </b>
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
                <td>
                  <h4>{flightDetails['origin_station']}</h4>
                  <p>{flightDetails['departure']['time']}</p>
                </td>
                <td>
                  <h4>{flightDetails['destination_station']}</h4>
                  <p>{flightDetails['arrival']['time']}</p>
                </td>
                <td>
                  <h4>Layover</h4>
                  <p>{flightDetails['total_duration']['hours']} hours and {flightDetails['total_duration']['minutes']} minutes</p>
                </td>
                <td>
                  <h3><span>$</span>{formatPrice(flightDetails['price'])}</h3>
                </td>
              </tr>
              {/*<Button*/}
              {/*    type="submit"*/}
              {/*    onClick={this.openUrl}*/}
              {/*    fullWidth*/}
              {/*    variant="contained"*/}
              {/*    color="primary"*/}
              {/*    className="btn btn-yellow"*/}
              {/*>*/}
                
                {/*  we need an if statement here if return flights or flight*/}
              {/*</Button>*/}
            </tbody>
          </table>
          <a className="btn btn-yellow" style={{ color: 'white' }}
                   onClick={openUrl}>
                  Book flight
                </a>
        </div>
      );


    let paymentOption;
    if (onlyHotel == 'false') {
      paymentOption = (
        <center>
          <Link
            className="btn btn-aqua"
            to={{
              pathname: "/hotel-booking",
              state: {
                hotelDetails: hotelDetails,
                room: roomDetails,
                roomName: roomName,
                carrier_name: hotelDetails.carrier_name
              }
            }}
          >
            Pay Now
          </Link>
        </center>
      );
    }
    

    return	<div>
      <div className="destinations-details-page mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="destination-content col-xl-10">
              <div className="destinations-details-main-slider-wrap">
                <div className="destinations-details-main-slider" style={{backgroundColor: '#efefef'}}>
                  <div className="d-details-main-slider-item" style={{padding: '18px'}}>
                    {/* <center><img src={publicUrl+"assets/img/others/checkbox.png"} alt="img" style={{marginTop: '20px'}}/></center> */}
                    <center><h3>Congratulations</h3></center>
                    <center>
                      <p>
                        You have successfully selected the following hotel and flight for your journey. Please find the details below.
                      </p>
                      <br/>
                    </center>
                    <center>
                      <b>Hotel Details - </b>
                    </center>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td className="title">City</td>
                          <td className="title">Room</td>
                          <td className="title">Duration</td>
                          <td className="title">Price</td>
                        </tr>
                        <tr>
                          <td>
                            <i className="fa fa-map-marker"></i> {hotelDetails['city']}
                            <h4 className="mt-2">{hotelDetails['hotel']}</h4>
                          </td>
                          <td>
                          <p>{packageDetails['tripDays']} days {roomDetails['adults']+roomDetails['children']} person</p>
                            <h4>{roomName}</h4>
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
                    {flightDetailsTable}
                    <br/>
                    {paymentOption}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
    </div>

}

export default DestinatioDetails