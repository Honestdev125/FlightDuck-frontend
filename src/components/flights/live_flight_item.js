import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import {useGlobalState} from "../../index";
import { useState } from 'react';
import LoadingBox from '../section-components/loading-box';

const LiveFlightItem = (flightDetails) => {
  const [return_date] = useGlobalState("return_date")
  const [departureDate] = useGlobalState("departure_date");
  const [loading, setLoading] = useState(false);
  const openInNewTab = (url) => {
   
    
    // console.log("save flight urls=======", url);
    
      localStorage.setItem('flight_booking_url', url);
      // window.location.href = `#booking-confirmation`
   
    console.log(flightDetails)
    localStorage.setItem('flight_details', JSON.stringify(flightDetails));
    console.log("create new page that only shows hotel and flight booking===")
    setLoading(true)
    // window.location.href = `#destination-details`
  }

  return (
    <div className="single-destinations-list style-three">
      <LoadingBox
              open={loading}
              onClose={() => {
                setLoading(false)
              }}
              timeout={5000}
              url={'/booking-confirmation'}
            />
      <div className="thumb">
        <img src={flightDetails.agent.image} alt={flightDetails.agent.name} style={{"objectFit": "scale-down"}} />
      </div>
      <div className="details">
        <div className="row">
          <div className="col-sm-10 mt-3">
            <h3 className="title"><i className="fa fa-plane" />  {flightDetails.origin_station} - To - {flightDetails.destination_station}</h3>
            <p>Total Travel Time - {flightDetails.total_duration.hours} hours, {flightDetails.total_duration.minutes} minutes, </p>
          </div>
          <div className="col-sm-2 mt-4">
            <i className="fa-sharp fa-solid fa-location-dot fa-2x" aria-hidden="true"></i>
          </div>
        </div>
        <p className="content">Depature Date - {departureDate} | Return Date - {return_date} </p>

        <div className="row">
          <div className="col-sm-4">
            <div className="list-price-meta">
              <div className="tp-list-meta d-inline-block">
                <p><i className="fa fa-clock-o" /> Departure Time - {flightDetails.departure.time}</p>
                <p><i className="fa fa-clock-o" /> Arrival Time - {flightDetails.arrival.time}</p>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="list-price-meta">
              <div className="tp-list-meta d-inline-block">
                <h3>Total Price</h3>
                <h5><span>{flightDetails.currencySymbol}</span> {flightDetails.formattedPrice}</h5>
              </div>
            </div>
          </div>
          <div className='col col-sm-3' onClick={() => openInNewTab(flightDetails.booking_deep_link)}>
            <a className='btn btn-yellow' style={{ color: 'white' }}>
              Select
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveFlightItem