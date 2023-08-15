import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

const FlightOfflineItem = (flightDetails) => {
  console.log("flights details=====", flightDetails);

  return (
    <div className="single-destinations-list style-three">
      <div className="thumb">
        {/* <img src={image_url} alt="image" /> */}
        <img src='https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg' alt="image" style={{"objectFit": "scale-down"}} />
      </div>
      <div className="details">
        <div className="tp-review-meta">
          <i className="ic-yellow fa fa-star" />
          <i className="ic-yellow fa fa-star" />
          <i className="ic-yellow fa fa-star" />
          <i className="ic-yellow fa fa-star" />
          <i className="fa fa-star" />
          <span>4.0</span>
        </div>
        <p className="location"><img src='/react/viaje/assets/img/icons/1.png' alt="map" />{flightDetails.destination_country}</p>
        {/* <p className="location"><img src='https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg' alt="map" />India</p> */}
        <h4 className="title"><Link to="/tour-details">{flightDetails.destination}, {flightDetails.destination_city}</Link></h4>
        {/* <h4 className="title"><Link to="/tour-details">Kapurthala, Punjab</Link></h4> */}
        {/* <p className="content">{flightDetails.description}</p> */}
        {/* <p className="content">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</p> */}
        <div className="list-price-meta">
          <ul className="tp-list-meta d-inline-block">
            <li><i className="fa fa-calendar-o" /> 8oct</li>
            <li><i className="fa fa-clock-o" /> 4 days</li>
            <li><i className="fa fa-star" /> 4.3</li>
          </ul>
          <div className="tp-price-meta d-inline-block">
            <p>Price</p>
            {/* <h2>620 <span>$</span></h2> */}
            <h2>{flightDetails.minPrice} <span>$</span></h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightOfflineItem